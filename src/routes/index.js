import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import GuestRoute from './GuestRoute';

export default function Routes() {
    return (
        <Switch>
            <Route element={<GuestRoute />}>
                <Route path="/" exact element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Switch>
    );
}
