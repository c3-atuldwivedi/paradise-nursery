import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Medicinal' },
  { id: 2, name: 'Lavender', price: 15, category: 'Aromatic' },
  { id: 3, name: 'Rosemary', price: 12, category: 'Aromatic' },
  { id: 4, name: 'Basil', price: 8, category: 'Medicinal' },
  { id: 5, name: 'Spider Plant', price: 9, category: 'Decorative' },
  { id: 6, name: 'Snake Plant', price: 11, category: 'Decorative' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = id => cartItems.some(item => item.id === id);

  return (
    <div className="products">
      <h2>Available Plants</h2>
      {['Medicinal', 'Aromatic', 'Decorative'].map(category => (
        <div key={category}>
          <h3>{category} Plants</h3>
          {plants.filter(p => p.category === category).map(p => (
            <div key={p.id}>
              <h4>{p.name}</h4>
              <p>${p.price}</p>
              <button onClick={() => dispatch(addToCart(p))} disabled={isInCart(p.id)}>Add to Cart</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;