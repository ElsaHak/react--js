import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoues = ({ component: Component, roles, ...rest }) => {
    const { user } = useContext(AuthContext);

    
    if (!user || !roles.includes(user.role)) {
      
        return <Navigate to="/login" />;
    }

    return <Component {...rest} />;
};

export default ProtectedRoues;

