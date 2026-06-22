import { useState } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/Product/ProductList";
import Cart from "./components/Cart/Cart"
import "./App.css";

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

      <ProductList />
    </>
  );
}

export default App;