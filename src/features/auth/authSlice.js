import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  encodedToken: '',
  authStatus: localStorage.getItem('ENCODED_TOKEN') ? true : false,
  address: {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.authStatus = true;
      state.encodedToken = action.payload;
    },
    registerNewUser: (state, action) => {
      state.authStatus = true;
      state.encodedToken = action.payload;
    },
    logoutUser: (state) => {
      state.encodedToken = '';
      state.authStatus = false;
    },
    addNewAddress: (state, action) => {
      state.address = action.payload;
    }
  }
});
export const { loginUser, logoutUser, registerNewUser, addNewAddress } = authSlice.actions;
export default authSlice.reducer;
