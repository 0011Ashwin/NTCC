import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = !!localStorage.getItem('auth'); // or check a token

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
