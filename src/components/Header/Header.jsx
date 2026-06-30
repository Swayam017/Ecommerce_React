import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import CartButton from "../Cart/CartButton";
import AuthContext from "../../store/auth-context";

import "./Header.css";

function Header({ onShowCart }) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar className="main-navbar">
        <Container className="header-container">
          {/* Navigation */}
          <Nav className="nav-center">
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
          </Nav>

          {/* Right Side */}
          <div className="header-right">
            {!authCtx.isLoggedIn ? (
              <>
                <Link to="/login" className="auth-btn">
                  Login
                </Link>

                <Link to="/signup" className="auth-btn">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="auth-btn">
                  Profile
                </Link>

                <button
                  className="auth-btn logout-btn"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </>
            )}

            <CartButton onClick={onShowCart} />
          </div>
        </Container>
      </Navbar>

      <div className="hero-section">
        <h1 className="hero-title">The Generics</h1>
      </div>
    </>
  );
}

export default Header;