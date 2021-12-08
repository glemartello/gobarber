import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';

import { store } from '~/store';

export default function GuestRoute() {
    const { signed } = store.getState().auth;

    if (signed) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    );
}
