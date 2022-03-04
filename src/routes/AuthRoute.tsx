import { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import { AuthContext } from 'src/context/provider/AuthProvider';
import { ChildrenProps } from '../context/types/types';

const AuthRoute = ({ children } : ChildrenProps ) => {

    const AuthCheck = sessionStorage.getItem('token');
    
    return AuthCheck ? <>{children}</> : <Navigate to="/login"/>
}
export default AuthRoute;