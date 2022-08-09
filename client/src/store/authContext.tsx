import { createContext } from "react";

interface AppContextInterface {
  isLoggedIn: boolean;
  isLoading: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export const AuthCtx = createContext<AppContextInterface | null>(null);
