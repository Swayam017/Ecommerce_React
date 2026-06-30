import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;

  function loginHandler(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }

  function logoutHandler() {
    setToken(null);
    localStorage.removeItem("token");
  }

  const contextValue = {
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;