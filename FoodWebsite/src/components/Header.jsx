import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { navList } from "../data/Navlistitem";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/Cartslice";

export default function Header() {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  console.log(totalItems);
  useEffect(() => {
    dispatch(getCartTotal());
  }, []);


  const [show, setShow] = useState(false);

  return (
    <div className="container-fluid nav-bar sticky-top">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md py-4">
          <Link to="/" className="navlink fw-bolder">
            <h1>
              Cater
              <span className="text-dark px-2 fw-bolder">Serve</span>
            </h1>
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            onClick={() => setShow(!show)}
          >
            <span className="fa fa-bars "></span>
          </button>

          <div
            className={
              show ? "navbar-collapse show" : "collapse navbar-collapse"
            }
          >
            <ul className="navbar-nav mx-auto">
              {navList.map((val, index) => {
                return (
                  <li key={index}>
                    <Link to={val.path} className="nav-item nav-link">
                      {val.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="btn-search btn  btn-md-square rounded-circle d-md-inline-flex">
              <i className="fas fa-search"></i>
            </div>
            <Link
              to="/cart"
              className="btn-cart btn  btn-md-square ms-1 ms-lg-4 rounded-circle d-md-inline-flex"
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="btn-md rounded-circle  d-none d-sm-inline-flex">
                {totalItems}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
