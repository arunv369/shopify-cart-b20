import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Payment = ({ totalPrice, discount, finalPrice, resetCart }) => {
  return (
    <div className="p-5">
      <div className="flex items-center gap-3">
        <Link to="/cart">
          <i className="fa-solid fa-arrow-left text-lg"></i>
        </Link>
        <h1 className="text-lg font-semibold">Back</h1>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-orange-100 px-6">
        <div className="relative flex flex-col items-center">
          <div className="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 bg-white rounded-full"></div>
          </div>
          <h1 className="text-xl font-semibold mt-4 text-black">
            Payment successful
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Successfully paid ${finalPrice.toFixed(2)}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 mt-6 w-full max-w-md">
          <div className="flex justify-between text-gray-600 text-sm py-1">
            <span>Amount</span>
            <span className="font-semibold text-black">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-gray-600 text-sm py-1">
            <span>Discount(10%)</span>
            <span className="font-semibold text-black">
              -${discount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-gray-600 text-sm py-1">
            <span>Total amount</span>
            <span className="font-semibold text-black">
              ${finalPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between text-gray-600 text-sm py-1">
            <span>Status</span>
            <span className="text-green-500 font-semibold flex items-center">
              <FaCheckCircle className="mr-1" /> Success
            </span>
          </div>
        </div>

        <Link to="/">
          <button
            onClick={resetCart}
            className="mt-6 bg-orange-500 text-white text-lg font-semibold py-3 px-12 rounded-full shadow-md flex items-center gap-2"
          >
            Back Home <span className="text-xl">↗</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
