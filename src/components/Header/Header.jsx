import { Navbar, Nav, Container } from "react-bootstrap";
import CartButton from "../Cart/CartButton";
import "./Header.css";

function Header({ onShowCart }) {
  return (
    <>
      <Navbar className="main-navbar">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link>HOME</Nav.Link>
            <Nav.Link>STORE</Nav.Link>
            <Nav.Link>ABOUT</Nav.Link>
          </Nav>

          <CartButton onClick={onShowCart} />
        </Container>
      </Navbar>

      <div className="hero-section">
        <h1 className="hero-title">The Generics</h1>
      </div>
    </>
  );
}

export default Header;