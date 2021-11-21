import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ( props ) => {
    const { currentUser } = useAuth()
    
    return currentUser ? <Route {...props} /> : <useNavigate to="/" />;
}

export default PrivateRoute



