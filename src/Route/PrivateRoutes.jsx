import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()

    if(loader){
        return<div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }
    if(user, loader){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;