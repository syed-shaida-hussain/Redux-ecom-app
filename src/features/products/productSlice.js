import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await fetch('/api/products');
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
    }
  }
});

export default productSlice.reducer;
