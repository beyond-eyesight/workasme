import { createSlice } from '@reduxjs/toolkit';

const passwordSlice = createSlice({
  name: 'password',
  initialState: {
    value: ''
  },
  reducers: {
    signIn: (state,
      action) => {
      state.value = action.payload;
    }
  }
});

export const {signIn} = passwordSlice.actions;

export const selectPassword = (state: any) => state.password.value;

export default passwordSlice.reducer;
