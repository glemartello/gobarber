import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';

export default function GuestRoute() {
    const signed = false;

    if (signed) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    );
}
