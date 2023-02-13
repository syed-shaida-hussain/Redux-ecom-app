import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  status: 'idle',
  encodedToken: '',
  authStatus: localStorage.getItem('ENCODED_TOKEN') ? true : false
};

export const registerNewUser = createAsyncThunk('/users/newUser', async (action) => {
  const user = action;
  const { data } = await axios.post('/api/auth/signup', {
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName
  });
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerNewUser.pending]: (state) => {
      state.status = 'loading';
    },
    [registerNewUser.fulfilled]: (state, action) => {
      state.encodedToken = action.payload.encodedToken;
      state.status = 'fulfilled';
    }
  }
});
export default authSlice.reducer;
