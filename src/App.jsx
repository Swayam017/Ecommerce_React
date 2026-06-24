import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

function App() {
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
  <Route path="/store" element={<Store />} />
  <Route path="/about" element={<About />} />
</Routes>
    </>
  );
}

export default App;