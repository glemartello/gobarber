import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification,
} from './styles';

export default function Notifications() {
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const hasUnread = useMemo(
        () =>
            notifications?.find((notification) => notification.read === false),
        [notifications]
    );

    useEffect(() => {
        async function loadNotifications() {
            const response = await api.get('notifications');

            const data = response?.data?.map((notification) => ({
                ...notification,
                timeDistance: formatDistance(
                    parseISO(notification.created_at),
                    new Date(),
                    { addSuffix: 'true', locale: pt }
                ),
            }));

            setNotifications(data);
        }

        loadNotifications();
    }, []);

    const handleToggleVisible = () => {
        setVisible((oldState) => !oldState);
    };

    async function handleMarkAsRead(id) {
        await api.put(`notifications/${id}`);

        setNotifications(
            notifications.map((notification) =>
                notification.id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>

            <NotificationList visible={visible}>
                <Scroll>
                    {notifications?.length ? (
                        <>
                            {notifications?.map((notification) => (
                                <Notification
                                    key={notification.id}
                                    unread={!notification.read}
                                >
                                    <p>{notification.content}</p>
                                    <time>{notification.timeDistance}</time>
                                    {!notification.read && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleMarkAsRead(
                                                    notification.id
                                                )
                                            }
                                        >
                                            Marcar como lida
                                        </button>
                                    )}
                                </Notification>
                            ))}
                        </>
                    ) : (
                        <div>Sem notificações</div>
                    )}
                </Scroll>
            </NotificationList>
        </Container>
    );
}
