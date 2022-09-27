export type LoginParams = {
  identifier: string;
  password: string;
};

export type LoginResponse = {
  jwt: string;
  user: any;
};

export type AuthContextType = {
  isLoggedIn: boolean;
  token: string | null;
  setToken: (token: string | null) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};
