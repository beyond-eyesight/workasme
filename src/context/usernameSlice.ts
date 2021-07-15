import { createSlice } from '@reduxjs/toolkit';

const usernameSlice = createSlice({

  name: 'username',
  initialState: {
    value: ''
  },
  reducers: {
    signIn: (state,
             action) => {
      state.value = action.payload;
      console.log("dispatch good")
    }
  },
});

export const { signIn } = usernameSlice.actions;

export const selectUsername = (state: any) => state.username.value;

export default usernameSlice.reducer;
