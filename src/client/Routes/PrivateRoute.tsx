import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../store/Hooks/useTypedSelector';
import { userSignInSelectors } from '../../store/UserSignIn/userSignInSelectors';

//@ts-ignore
const PrivateRoute = ({children}) => {
    const user = useTypedSelector(userSignInSelectors.getUserData);

    return user ? children : <Navigate to = '/sign-in'/>
};

export default PrivateRoute;