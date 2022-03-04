import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChildrenProps, DefaultState } from '../types/types';

const defaultContextVal : DefaultState = {
  logIn: () => {},
  logOut: () => {},
  isAuth: false,
}

export const AuthContext = createContext<DefaultState> (defaultContextVal);

const AuthProvider = ({ children }: ChildrenProps) => {

  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  
  const authCheck = () => {
    const authToken = sessionStorage.getItem('token')
    if(authToken) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }  
  }
  
  useEffect(() => {
    authCheck();
  }, []);

  const logIn = (setToken: string, userId: string) => {
    setIsAuth(true);
    sessionStorage.setItem('token', setToken)
    sessionStorage.setItem('id', userId)
  };

  const logOut = () => {
    setIsAuth(false);
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('id')
    console.log('token, id 삭제')
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{logIn, logOut, isAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;