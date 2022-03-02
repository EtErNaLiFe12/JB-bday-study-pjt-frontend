import { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import { AuthContext } from 'src/context/provider/AuthProvider';
import { ChildrenProps } from '../context/types/types';

const AuthRoute = ({ children } : ChildrenProps ) => {
    const { isAuth } = useContext(AuthContext)
    
    return isAuth ? <>{children}</> : <Navigate to="/login"/>
}
export default AuthRoute;