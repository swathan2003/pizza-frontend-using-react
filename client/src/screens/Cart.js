import React, { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="container">
      <h2 className="mt-3">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Varient</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.varient}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price} RS/-</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
