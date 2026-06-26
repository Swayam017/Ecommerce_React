import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../Product/ProductItem";


const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    ],

    reviews: [
      "Excellent product",
      "Worth buying",
      "Good quality",
    ],
  },

  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%④.png",
    ],

    reviews: [
      "Looks awesome",
      "Nice color",
      "Highly recommended",
    ],
  },

  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ],

    reviews: [
      "Superb",
      "Nice finish",
      "Loved it",
    ],
  },

  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%③.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%②.png",
    ],

    reviews: [
      "Fantastic",
      "Premium quality",
      "Must buy",
    ],
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

export { productsArr };
export default ProductList;