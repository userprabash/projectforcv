import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Details from "../Pages/Details";
import Cart from "../Pages/Cart";

function Header() {
  let [catdata, setCatData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/product/categories`)
      .then((a) => a.json())
      .then((b) => setCatData(b));
  }, []);
  return (
    <>
      <div className="main-navbar shadow-sm sticky-top">
        <div className="top-navbar">
          <div className="container">
            <div className="row">
              <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                <Link to="/">
                  <img
                    className="w-100"
                    src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-md-5 my-auto">
                <form role="search">
                  <div className="input-group">
                    <input
                      type="search"
                      placeholder="Search your product"
                      className="form-control"
                    />
                    <button className="btn bg-white" type="submit">
                      <i class="bi bi-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-5 my-auto">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      <i className="fa fa-shopping-cart" /> Cart (0)
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-heart" /> Wishlist (0)
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-user" /> Username
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-user" /> Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-list" /> My Orders
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-heart" /> My Wishlist
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-shopping-cart" /> My Cart
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-sign-out" /> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a
              className="navbar-brand d-block d-sm-block d-md-none d-lg-none"
              href="#"
            >
              Daraz
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mainmenu">
                  <a className="nav-link" href="#">
                    All Categories <i class="bi bi-caret-down-fill"></i>
                  </a>
                  <ul class="submenu">
                    {catdata.slice(0, 7).map((a) => (
                      <li className="list-group-item" key={a.slug}>
                        <Link to={`/cat/${a.slug}`}>{a.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {catdata.slice(0, 7).map((a) => (
                  <li className="nav-item">
                    <Link className="nav-link" to={`/cat/${a.slug}`}>
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid/" element={<Category />} />
        <Route path="/details/:id/" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default Header;
