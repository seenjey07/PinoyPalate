import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-accent w-screen">
        <img
          src="/images/PinoyPalateLogo.png"
          alt="PinoyPalateLogo"
          className="logo"
          onClick={() => window.location.reload()}
        />

        <div className="navbar justify-end w-screen">
          <ul className="flex text-black text-sm">
            <li>
              <Link to="/" className="btn btn-ghost hover:bg-base-100 ">
                Home 🏠
              </Link>
            </li>
            <li>
              <Link to="/products" className="btn btn-ghost hover:bg-base-100">
                Products ⚙️
              </Link>
            </li>
            <li>
              <Link to="/cart" className="btn btn-ghost hover:bg-base-100">
                Cart 🛒
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
