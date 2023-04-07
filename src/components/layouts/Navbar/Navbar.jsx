import React from "react";
import ImgHamburger from "../../img/ImgHamburger.ico";
import "../../scss/Navbar.scss"

const Navbar = () => {
  return (
    <div>
      <div>
        <a
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          href=""
        >
          <img
            width="50px"
            height="50px"
            src={ImgHamburger}
            alt={ImgHamburger}
          />
        </a>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-dark Works text-center" aria-current="page" href="#">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark Blog text-center" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark Contact text-center" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
