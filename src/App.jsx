import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Profile from "./pages/Profile";

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && (
        <Cart
          show={cartIsShown}
          onHide={hideCartHandler}
        />
      )}

      <Header onShowCart={showCartHandler} />

      <Routes>
  <Route path="/" element={<Home />} />
  
  <Route
  path="/store"
  element={
    authCtx.isLoggedIn ? (
      <Store />
    ) : (
      <Navigate to="/login" replace />
    )
  }
/>
  <Route path="/about" element={<About />} />
   <Route path="/contact" element={<ContactUs />} />
    <Route path="/signup" element={<Signup />} />
     <Route path="/login" element={<Login />} />
     <Route path="/profile" element={<Profile />} />
   <Route
        path="/products/:productId"
        element={<ProductDetails />}
    />
</Routes>
    </>
  );
}

export default App;