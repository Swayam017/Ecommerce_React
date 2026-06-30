import {
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

  let initialToken = localStorage.getItem("token");
  const loginTime = localStorage.getItem("loginTime");

  const TOKEN_EXPIRY_TIME = 5 * 60 * 1000;

  if (initialToken && loginTime) {
    const elapsedTime = Date.now() - Number(loginTime);

    if (elapsedTime > TOKEN_EXPIRY_TIME) {
      localStorage.removeItem("token");
      localStorage.removeItem("loginTime");

      initialToken = null;
    }
  }

  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;

  // Login
  const loginHandler = (token) => {
    setToken(token);

    localStorage.setItem("token", token);
    localStorage.setItem("loginTime", Date.now());
  };

  // Logout
  const logoutHandler = useCallback(() => {
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("loginTime");
  }, []);

  // Validate Token
  const checkTokenValidity = useCallback(async () => {
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
  }, [token, API_KEY, logoutHandler]);

  useEffect(() => {
    checkTokenValidity();
  }, [checkTokenValidity]);

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