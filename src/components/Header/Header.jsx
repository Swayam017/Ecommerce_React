import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ onShowCart }) {
  return (
    <>
      <Navbar className="main-navbar">
        <Container>
          <Nav className="mx-auto">
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "nav-link active-link" : "nav-link"
    }
  >
    HOME
  </NavLink>

  <NavLink
    to="/store"
    className={({ isActive }) =>
      isActive ? "nav-link active-link" : "nav-link"
    }
  >
    STORE
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "nav-link active-link" : "nav-link"
    }
  >
    ABOUT
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive ? "nav-link active-link" : "nav-link"
    }
  >
    CONTACT US
  </NavLink>

 <div className="d-flex gap-2">
  <Link to="/login" className="btn btn-outline-light">
    Login
  </Link>

  <Link to="/signup" className="btn btn-warning">
    Sign Up
  </Link>
</div>

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