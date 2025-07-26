import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.name} width="80" />
              <h4>{item.name}</h4>
              <p>Unit: ${item.price} | Total: ${item.price * item.quantity}</p>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          ))}
          <p><strong>Total Items: {totalItems}</strong></p>
          <p><strong>Total: ${totalCost}</strong></p>
          <button onClick={() => alert("Checkout Coming Soon")}>Checkout</button>
          <Link to="/products"><button>Continue Shopping</button></Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
