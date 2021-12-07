import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';

import store from '~/store';

export default function PrivateRoute() {
    const { signed } = store.getState().auth;

    if (!signed) {
        return <Navigate to="/" />;
    }

    return (
        <DefaultLayout>
            <Outlet />
        </DefaultLayout>
    );
}
