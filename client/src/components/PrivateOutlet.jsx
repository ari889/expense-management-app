import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateOutlet = () => {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/" replace />;
}

export default PrivateOutlet