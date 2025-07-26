import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector((state) =>
    Array.isArray(state.cart.cartItems)
      ? state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0)
      : 0
  );

  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/">Landing</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
};

export default Header;
