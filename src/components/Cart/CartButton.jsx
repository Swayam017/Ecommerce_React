import "./CartButton.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function CartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce(
    (currNumber, item) => {
      return currNumber + item.quantity;
    },
    0
  );

  return (
    <button
      className="cart-button"
      onClick={onClick}
    >
      Cart

      <span className="cart-badge">
        {numberOfItems}
      </span>
    </button>
  );
}


export default CartButton;