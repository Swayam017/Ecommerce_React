import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

  // Read token from localStorage when app starts
  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;

  // Login
  function loginHandler(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }

  // Logout
  function logoutHandler() {
    setToken(null);
    localStorage.removeItem("token");
  }

  // Validate token with Firebase
  async function checkTokenValidity() {
    if (!token) return;

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: token,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log("Token Invalid");
        logoutHandler();
        return;
      }

      console.log("Token Valid");
      console.log(data);
    } catch (err) {
      console.log("Error validating token:", err);
    }
  }

  // Runs whenever token changes
  useEffect(() => {
    if (token) {
      checkTokenValidity();
    }
  }, [token]);

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