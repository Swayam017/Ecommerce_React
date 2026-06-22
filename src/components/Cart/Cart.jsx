import { Modal, Button, Table } from "react-bootstrap";
import { useState } from "react";

const initialCartItems = [
  {
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

function Cart({ show, onHide }) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeItemHandler = (title) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>CART</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => (
              <tr key={item.title}>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      width="60"
                    />
                    <span>{item.title}</span>
                  </div>
                </td>

                <td>${item.price}</td>

                <td>
                  <div className="d-flex align-items-center gap-3">
                    <span>{item.quantity}</span>

                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        removeItemHandler(item.title)
                      }
                    >
                      REMOVE
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;