import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  token: null
};
// const token = localStorage.getItem('ENCODED_TOKEN');

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerNewUser: async (state, action) => {
      const user = action.payload;
      const { data } = await axios.post('/api/auth/signup', {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName
      });
      state.token = data.encodedToken;
      console.log(data);
      localStorage.setItem('ENCODED_TOKEN', data.encodedToken);
    }
  },
  extraReducers: {}
});
export const { registerNewUser } = authSlice.actions;
export default authSlice.reducer;
