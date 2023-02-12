import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  products: [],
  singleProduct: {},
  cartItems: [],
  totalCartPrice: 0
};

const encodedToken = localStorage.getItem('ENCODED_TOKEN');

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
      state.totalCartPrice += action.payload.discountedPrice;
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
    }
  }
});

export const { addToCartButtonClicked } = productSlice.actions;

export default productSlice.reducer;
