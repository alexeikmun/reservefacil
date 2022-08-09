import { AuthCtx } from "./authContext";

type ProviderProps = {
  children: JSX.Element;
};

export const AuthCtxProvider = ({ children }: ProviderProps) => {
  const isLoggedIn: boolean = false;
  const loginHandler = (): void => {
    console.log("Login Handler");
  };
  const logoutHandler = (): void => {
    console.log("Logout handler");
  };
  return (
    <AuthCtx.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isLoading: false,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};
