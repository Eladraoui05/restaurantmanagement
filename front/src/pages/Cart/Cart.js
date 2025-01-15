import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css';

function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  // Function to handle navigation to booking form
  const handleCheckout = () => {
    navigate('/booktable', { state: { cart, total } }); // Pass cart and total via state
  };

  return (
    <div className="cart-page container">
      <h1 className="cart-header">vos Achats</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h5>{item.title}</h5>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
Retirer            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Total: {total.toFixed(2)} MAD</h3>
        <button className="btn btn-success" onClick={handleCheckout}>
          Proceder payment
        </button>
      </div>
    </div>
  );
}

export default CartPage;
