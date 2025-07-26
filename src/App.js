// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;