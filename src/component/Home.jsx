const Home = ({ product, addToCart, cartProduct, removeCart, loading }) => {
  if (loading) {
    return <h1 className="text-center text-2xl font-bold mt-10">Loading...</h1>;
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => {
          return (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg flex flex-col p-4 hover:shadow-xl transition-all"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-3"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {cartProduct.some((prod) => prod.id === product.id) ? (
                <button
                  onClick={() => removeCart(product.id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg mt-3  transition"
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-black text-white py-2 rounded-lg mt-3 hover:bg-grey-600 transition"
                >
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
