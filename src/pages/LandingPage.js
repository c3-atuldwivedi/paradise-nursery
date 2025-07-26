import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing">
    <h1>Paradise Nursery</h1>
    <p>Your destination for the finest house plants.</p>
    <Link to="/products"><button>Get Started</button></Link>
  </div>
);

export default LandingPage;
