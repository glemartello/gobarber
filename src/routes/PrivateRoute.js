import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

export default function PrivateRoute() {
    const signed = false;

    if (!signed) {
        return <Navigate to="/" />;
    }

    return (
        <DefaultLayout>
            <Outlet />
        </DefaultLayout>
    );
}
