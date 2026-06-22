import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CartButton from "../Cart/CartButton";
import "./Header.css";

function Header({ onShowCart }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link>HOME</Nav.Link>
            <Nav.Link>STORE</Nav.Link>
            <Nav.Link>ABOUT</Nav.Link>
          </Nav>

          <Button
            variant="outline-info"
            onClick={onShowCart}
          >
            Cart
          </Button>
        </Container>
      </Navbar>

      <div className="hero-section">
        <h1 className="hero-title">The Generics</h1>
      </div>
    </>
  );
}

export default Header;