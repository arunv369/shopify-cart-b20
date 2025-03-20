import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import Payment from "./component/Payment";

function App() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cartProduct, setCartProduct] = useState([]);

  const addToCart = (productList) => {
    setCartProduct((prevCart) => {
      const isExisting = prevCart.some((prev) => prev.id === productList.id);
      if (isExisting) {
        return prevCart;
      } else {
        return [...prevCart, { ...productList, quantity: 1 }];
      }
    });
  };

  const removeCart = (id) => {
    setCartProduct(cartProduct.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartProduct((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const productData = await fetch("https://fakestoreapi.com/products");
        const data = await productData.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPrice = cartProduct.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  const resetCart = () => {
    setCartProduct([]);
  };
  return (
    <Router>
      <Navbar cartProduct={cartProduct} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              product={product}
              addToCart={addToCart}
              cartProduct={cartProduct}
              removeCart={removeCart}
              loading={loading}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartProduct={cartProduct}
              updateQuantity={updateQuantity}
              removeCart={removeCart}
              totalPrice={totalPrice}
              discount={discount}
              finalPrice={finalPrice}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Payment
              totalPrice={totalPrice}
              discount={discount}
              finalPrice={finalPrice}
              resetCart={resetCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
