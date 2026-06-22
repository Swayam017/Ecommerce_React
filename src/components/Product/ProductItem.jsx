import { Card, Button } from "react-bootstrap";
import "../Product/ProductItem.css";


function ProductItem({ product }) {
  return (
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

          <Button variant="info">
            Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;