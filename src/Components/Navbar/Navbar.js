import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./assets/images/udacity.svg" alt="Udacity Logo" />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </a>
              <ul className="dropdown-menu ">
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Why Udacity?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Udacity for Enterprise
                  </a>
                </li> */}
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "blue",
                  }}
                ></div>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Why Udacity?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Udacity for Enterprise
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Udacity for Nations
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Scholarships
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex md-mb-2" role="search">
            <input
              className="form-control me-4"
              type="search"
              placeholder="Search"
            />
          </form>
          <button className="btn btn-outline-primary me-2">Log in</button>
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </nav>
  );
}
