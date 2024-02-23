import React from "react";
import "./NavBar.css";
import reactLogo from "../assets/logo.svg";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "hsl(36, 100%, 99%)" }}>
        <div className="container-fluid">
          <img src={reactLogo}></img>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Popular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trendings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
