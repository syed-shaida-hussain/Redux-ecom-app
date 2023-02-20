import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  status: 'idle',
  encodedToken: '',
  authStatus: false
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

// export const loginUser = createAsyncThunk('/users/newUser', async (action) => {
//   const user = action;
//   const { data } = await axios.post('/api/auth/login', {
//     email: user.email,
//     password: user.password
//     // firstName: user.firstName,
//     // lastName: user.lastName
//   });
//   console.log(data);
//   return data;
// });

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.authStatus = true;
      state.encodedToken = action.payload;
    }
  },
  extraReducers: {
    [registerNewUser.pending]: (state) => {
      state.status = 'loading';
    },
    [registerNewUser.fulfilled]: (state, action) => {
      state.encodedToken = action.payload.encodedToken;
      state.authStatus = true;
      state.status = 'fulfilled';
    }
  }
});
export const { loginUser } = authSlice.actions;
export default authSlice.reducer;
