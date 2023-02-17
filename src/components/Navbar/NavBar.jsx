import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/Dealerz..png";
import phone from "../../images/iconPhone.svg";
import shopping from "../../images/iconShopping.svg";
import cart from "../../images/cart.svg";
import bell from "../../images/bell.svg";
import heart from "../../images/heart.svg";
import profile from "../../images/profile.svg";
import "./navbar.css";

function NavBar() {
  return (
    <Fragment>
      <div className="top-nav d-flex align-items-center w-100">
        <div className="d-flex align-items-center justify-content-between container-box">
          <NavLink className="navbarLogo" to="/">
            <img alt="not found" src={logo} />
          </NavLink>
          <div>
            <span className="mx-4">
              <img className="mx-2" alt="not found" src={phone} />
              <span>Call Center</span>
            </span>
            <span>
              <img className="mx-2" alt="not found" src={shopping} />
              <span>Shipping & Returns</span>
            </span>
          </div>
        </div>
      </div>
      <Navbar expand="lg">
        <div className="container-box">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-between" id="navbarScroll">
            <Nav className="my-2 my-lg-0">
              <NavLink className="me-0 me-lg-4 text-decoration-none"  to="shop" end>Shop</NavLink>
              <NavLink className="mx-0 mx-lg-4 text-decoration-none" to="promo">Promo</NavLink>
              <NavLink className="mx-0 mx-lg-4 text-decoration-none" to="about">About</NavLink>
              <NavLink className="mx-0 mx-lg-4 text-decoration-none" to="blog">Blog</NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <div className="icons-box d-flex">
              <img className="mx-2 mx-lg-4" alt="not found" src={heart} />
              <NavLink to="cart" className="position-relative">
                <span className="position-absolute count">3</span>
                <img className="mx-2 mx-lg-4" alt="not found" src={cart} />
              </NavLink>
              <img className="mx-2 mx-lg-4" alt="not found" src={profile} />
              <img className="mx-2 mx-lg-4" alt="not found" src={bell} />
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Fragment>
  );
}

export default NavBar;
