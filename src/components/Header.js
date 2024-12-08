import { React, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import "./Header.css"
import { SidebarContext } from "../contexts/SidebarContext";


const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <header className="main_menu home_menu fixed bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand" href="index.html">
                {" "}
                <img src={logo} alt="" />{" "}
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_icon">
                  <i className="fas fa-bars" />
                </span>
              </button>
              <div className=" navbar-collapse main-menu-item">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/" className="nav-link" href="index.html">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/"
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_1"
                    >
                      <Link
                        to="/Shopcategory"
                        className="dropdown-item"
                        href="category.html"
                      >
                        {" "}
                        shop category
                      </Link>
                      <Link
                        to="/singleproduct"
                        className="dropdown-item"
                        href="single-product.html"
                      >
                        product details
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/login"
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      pages
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <Link to="/login" className="dropdown-item" href="login.html">
                        {" "}
                        login
                      </Link>
                      <Link
                        to="/tracking"
                        className="dropdown-item"
                        href="tracking.html"
                      >
                        tracking
                      </Link>
                      <Link
                        to="/checkout"
                        className="dropdown-item"
                        href="checkout.html"
                      >
                        product checkout
                      </Link>
                      <Link
                        to="/shopcart"
                        className="dropdown-item"
                        href="cart.html"
                      >
                        shopping cart
                      </Link>
                      <Link
                        to="/confirmation"
                        className="dropdown-item"
                        href="confirmation.html"
                      >
                        confirmation
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item"
                        href="elements.html"
                      >
                        elements
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/"
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      blog
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <Link to="/blog" className="dropdown-item" href="blog.html">
                        {" "}
                        blog
                      </Link>
                      <Link
                        to="/singleblog"
                        className="dropdown-item"
                        href="single-blog.html"
                      >
                        Single blog
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link"
                      href="contact.html"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hearer_icon d-flex">
                <Link to="/" >
                  <i className="ti-search" />
                </Link>
                <Link to="/">
                  <i className="ti-heart" />
                </Link>



                {/* <div className="dropdown cart">
                  <Link to="/"
                    className="dropdown-toggle"
                    id="navbarDropdown3"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-cart-plus" />
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <div class="single_product">
    
                              </div>
                          </div>
                </div> */}
              </div>
              <div onClick={() => setIsOpen(!isOpen)}
                className="d-flex position-relative cursor-pointer"
              >
                <BsBag className="bi bi-bag text-secondary fs-4 ml-4 mb-1" />
                <div
                  className="bg-danger position-absolute rounded-circle text-white d-flex justify-content-center align-items-center"
                  style={{
                    fontSize: "12px",
                    width: "18px",
                    height: "18px",
                    right: "-8px",
                    bottom: "-8px",
                  }}
                >
                  {itemAmount}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
