import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const encodedToken = localStorage.getItem('ENCODED_TOKEN');

const initialState = {
  status: 'idle',
  products: [],
  singleProduct: {},
  cartItems: [],
  totalCartPrice: 0,
  wishlistItems: []
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await fetch('/api/products');
  const data = await res.json();
  return data;
});

export const fetchSingleProduct = createAsyncThunk(
  '/products/fetchSingleProduct',
  async (action) => {
    const productId = action._id;
    const res = await fetch(`/api/products/${productId}`);
    const data = await res.json();
    return data;
  }
);

export const fetchCartItems = createAsyncThunk('/products/fetchCartItems', async () => {
  const res = await fetch('/api/user/cart', { headers: { authorization: encodedToken } });
  const data = await res.json();
  return data;
});

export const fetchWishlistItems = createAsyncThunk('/products/fetchWishlistItems', async () => {
  const res = await fetch('/api/user/wishlist', { headers: { authorization: encodedToken } });
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCartButtonClicked: (state, action) => {
      axios.post(
        '/api/user/cart',
        { product: action.payload },
        { headers: { authorization: encodedToken } }
      );
      state.cartItems = [...state.cartItems, action.payload];
      state.totalCartPrice += Number(action.payload.discountedPrice);
    },
    addToWishlistButtonClicked: (state, action) => {
      axios.post(
        '/api/user/wishlist',
        { product: action.payload },
        {
          headers: { authorization: encodedToken }
        }
      );
      state.wishlistItems = [...state.wishlistItems, action.payload];
    },
    deleteCartButtonClicked: (state, action) => {
      const productId = action.payload._id;
      axios.delete(`/api/user/cart/${productId}`, { headers: { authorization: encodedToken } });
      const productIndex = state.cartItems.findIndex((product) => product._id === productId);
      const currentProductQuantity = state.cartItems[productIndex].quantity;
      state.cartItems = state.cartItems.filter((item) => item._id !== productId);
      state.totalCartPrice =
        state.totalCartPrice -
        Number(action.payload.discountedPrice) * Number(currentProductQuantity);
    },
    deleteWishlistButtonClicked: (state, action) => {
      const productId = action.payload._id;
      axios.delete(`/api/user/wishlist/${productId}`, { headers: { authorization: encodedToken } });
      state.wishlistItems = state.wishlistItems.filter((item) => item._id !== productId);
    },
    incrementCartQuantity: (state, action) => {
      const productId = action.payload._id;
      axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: 'increment'
          }
        },
        { headers: { authorization: encodedToken } }
      );
      const productIndex = state.cartItems.findIndex((product) => product._id === productId);
      state.cartItems[productIndex].quantity += 1;
      state.totalCartPrice += Number(action.payload.discountedPrice);
    },
    decrementCartQuantity: (state, action) => {
      const productId = action.payload._id;
      axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: 'decrement'
          }
        },
        { headers: { authorization: encodedToken } }
      );
      const productIndex = state.cartItems.findIndex((product) => product._id === productId);
      state.cartItems[productIndex].quantity -= 1;
      state.totalCartPrice -= Number(action.payload.discountedPrice);
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.status = 'fulfilled';
    },
    [fetchSingleProduct.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.singleProduct = action.payload.product;
      state.status = 'fulfilled';
    },
    [fetchCartItems.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCartItems.fulfilled]: (state, action) => {
      state.cartItems = action.payload.cart;
      state.status = 'fulfilled';
    },
    [fetchWishlistItems.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchWishlistItems.fulfilled]: (state, action) => {
      state.wishlistItems = action.payload.wishlist;
      state.status = 'fulfilled';
    }
  }
});

export const {
  addToCartButtonClicked,
  addToWishlistButtonClicked,
  deleteCartButtonClicked,
  deleteWishlistButtonClicked,
  incrementCartQuantity,
  decrementCartQuantity
} = productSlice.actions;

export default productSlice.reducer;
