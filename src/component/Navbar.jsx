import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartProduct }) => {
  return (
    <>
      <div className="bg-black text-white flex items-center justify-between px-5 py-3 sticky top-0">
        <h1 className="flex items-center text-[1.5rem] font-[Righteous]">
          <Link to="/" className="flex items-center">
            <i className="fa-brands fa-shopify mr-2 text-[#F4BD2F] text-xl"></i>
            <span className="">Shopify</span>{" "}
          </Link>
        </h1>

        <button className="rounded-full px-4 py-2 font-[Poppins] font-[800]">
          <Link to="/cart" className="flex items-center">
            <i className="fa-solid fa-cart-shopping mr-2 text-[#F4BD2F]"></i>
            <span>My Cart({cartProduct.length})</span>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Navbar;
