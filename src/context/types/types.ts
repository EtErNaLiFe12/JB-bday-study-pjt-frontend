export type DefaultState = {
  logIn: (
    setToken: string, 
    id: string
  ) => void;
  logOut: () => void;
  isAuth: boolean;
};

export type ChildrenProps = React.PropsWithChildren<{}>;
