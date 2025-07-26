import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], // Each item: { id, name, price, quantity, thumbnail }
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (!existingItem) {
        state.cartItems.push({ ...item, quantity: 1 });
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalCost -= item.quantity * item.price;
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
      }
    },
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= item.price;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
