import "./CartButton.css";

function CartButton() {
  return (
    <button className="cart-button">
      Cart
      <span className="cart-badge">0</span>
    </button>
  );
}

export default CartButton;