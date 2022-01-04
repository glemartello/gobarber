import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
                <aside>
                    <Notifications />

                    <Profile>
                        <div>
                            <strong>Glenda Martello</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src="https://avatars.dicebear.com/api/big-smile/glendamartello.svg"
                            alt="Glenda Martello"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
