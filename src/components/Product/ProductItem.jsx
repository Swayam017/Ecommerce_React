import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "../Product/ProductItem.css";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
   const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem(product);
  };

  return (
    <Link to={`/products/${product.id}`}>
    <Card className="product-card">
      <Card.Img
        variant="top"
        src={product.imageUrl}
        className="product-image"
      />

      <Card.Body>
        <Card.Title className="product-title">
          {product.title}
        </Card.Title>

        <div className="product-footer">
          <span className="product-price">
            ${product.price}
          </span>

          <Button variant="info"
          onClick={addToCartHandler}>
            Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default ProductItem;