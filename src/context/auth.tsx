import React, { createContext, useEffect, useState } from "react";
import { AuthContextType } from "../types/auth";

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  token: null,
  setToken: (token: string | null) => {},
  setIsLoggedIn: (isLoggedIn: boolean) => {},
});

export const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setIsLoggedIn(true);
      setToken(localStorageToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, setToken, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
