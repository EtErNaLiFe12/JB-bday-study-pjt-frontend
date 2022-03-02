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

  const logIn = (setToken: string, userId: string) => {
    setIsAuth(true);
    localStorage.setItem('token', setToken)
    localStorage.setItem('id', userId)

  };

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    navigate("/home")
  }

  return (
    <AuthContext.Provider value={{logIn, logOut, isAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;