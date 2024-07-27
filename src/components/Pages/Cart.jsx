import React from "react";

const Cart = ({ cart, isCartOpen, toggleCart, handleCheckout, setCart }) => {
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <>
      {isCartOpen && (
        <div className="fixed top-16 right-5 bg-white text-black shadow-lg p-4 rounded w-80">
          <h2 className="text-xl font-bold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p className="">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="mb-2 flex justify-between">
                  <div>
                    {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                  </div>
                  <div>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text- py-1 px-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
