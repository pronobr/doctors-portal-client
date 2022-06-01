import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import useHook from '../../hooks/useHook';
const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation();
    const [admin,userAdminLoading] =useHook(user)

    if(loading){
        return <h1>Loading ...</h1>
    }

    if(!user || !admin){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;