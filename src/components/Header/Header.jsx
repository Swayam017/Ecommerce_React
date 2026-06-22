import "../Header/Header.css";

import { Navbar, Nav, Container, Button } from "react-bootstrap";


function Header() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">STORE</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
          </Nav>

          <Button variant="outline-light">
            Cart
          </Button>
        </Container>
      </Navbar>

      <section className="hero-section">
        <h1>The Generics</h1>
        <p>Discover Amazing Music Albums</p>
      </section>
    </>
  );
}

export default Header;