import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { productsArr } from "../components/Product/ProductList";

function ProductDetails() {
  const { productId } = useParams();

  const product = productsArr.find(
    (item) => item.id === productId
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <Container className="py-5">

      <h1>{product.title}</h1>

      <h3>${product.price}</h3>

      <h2>Product Images</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            width="180"
          />
        ))}
      </div>

      <h2>Reviews</h2>

      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>

    </Container>
  );
}

export default ProductDetails;