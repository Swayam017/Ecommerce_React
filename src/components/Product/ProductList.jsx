import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../Product/ProductItem";


const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function ProductList() {
  return (
    <Container className="py-5">
      <h2 className="section-title">MUSIC</h2>

    <Row className="g-5 justify-content-center">
  {productsArr.map((product) => (
    <Col xs={12} md={6} key={product.title}>
      <ProductItem product={product} />
    </Col>
  ))}
</Row>
    </Container>
  );
}

export default ProductList;