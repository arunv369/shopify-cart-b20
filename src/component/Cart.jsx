import React from "react";
import { Link } from "react-router-dom";

const Cart = ({
  cartProduct,
  removeCart,
  updateQuantity,
  totalPrice,
  discount,
  finalPrice,
}) => {
  return (
    <div className="p-5 bg-white h-screen flex flex-col justify-between">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <Link to="/">
            <i className="fa-solid fa-arrow-left text-lg"></i>
          </Link>
          <h1 className="text-lg font-semibold">Back</h1>
        </div>
        <h1 className="text-2xl font-bold text-center flex-1 ">My Cart</h1>
      </div>

      <div className="flex-1 overflow-auto mb-12 ">
        {cartProduct.length === 0 ? (
          <p className=" text-gray-500 text-center text-2xl max-lg:text-lg">
            Your cart is empty.{" "}
            <Link to="/" className="text-blue-500 text-center">
              Go Shopping
            </Link>
          </p>
        ) : (
          cartProduct.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b pb-4 mb-4 last:border-b-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain rounded"
              />

              <div className="flex-1 ml-4">
                <h2 className="text-sm font-semibold">{item.title}</h2>
                <p className="text-gray-600 text-xs">{item.brand}</p>

                <p className="text-sm text-gray-700 font-semibold">
                  ${item.price.toFixed(2)} x {item.quantity} ={" "}
                  <span className="text-black font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </p>
              </div>

              <div className="flex gap-4 flex-col items-end">
                <button
                  className="text-gray-500 text-sm"
                  onClick={() => removeCart(item.id)}
                >
                  ✖
                </button>
                <div className="flex items-center mt-2 border rounded">
                  <button
                    className="px-2 py-1 text-lg"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-lg"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="fixed left-0 bottom-0 bg-black text-white w-full flex justify-between shadow-lg">
        <div className="md:w-[15%] ml-5">
          <div className="flex justify-between text-sm mt-4">
            <p>Subtotal:</p>
            <p className="font-semibold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm text-green-500 ">
            <p>Discount(10%):</p>
            <p className="font-semibold ">-${discount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-lg font-bold ">
            <p>Total: </p>
            <p className="font-semibold"> ${finalPrice.toFixed(2)}</p>
          </div>
        </div>

        {totalPrice > 0 ? (
          <Link to="/checkout">
            <button className=" bg-black border border-white  text-white font-bold pt-3 pb-3 pl-7 pr-7 mt-8 mr-7 rounded-lg">
              Payment
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
