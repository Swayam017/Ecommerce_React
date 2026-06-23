import { useContext } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import "./Cart.css";

function Cart({ show, onHide }) {
  const cartCtx = useContext(CartContext);

  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="cart-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="cart-title">Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Table borderless className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
  {cartCtx.items.length === 0 ? (
    <tr>
      <td colSpan="3" className="text-center">
        Cart is empty
      </td>
    </tr>
  ) : (
            cartCtx.items.map((item) => (
              <tr key={item.title}>
                <td className="cart-item">
  <img
    src={item.imageUrl}
    alt={item.title}
    className="cart-image"
  />
  <span>{item.title}</span>
</td>

                <td>${item.price}</td>

               <td>
  <span className="quantity-box">
    {item.quantity}
  </span>

  <Button
    className="remove-btn"
    size="sm"
    onClick={() => cartCtx.removeItem(item.title)}
  >
    REMOVE
  </Button>
</td>
              </tr>
  ))
)}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer className="flex-column">
  <div className="w-100 text-end">
    <span className="cart-total">
      Total: $
      {cartCtx.items.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      )}
    </span>
  </div>

  <Button className="purchase-btn mt-3">
    PURCHASE
  </Button>
</Modal.Footer>
    </Modal>
  );
}

export default Cart;