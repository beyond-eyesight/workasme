import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  username: null,
  password: null,
  isSigned: true,
  status: "Initialized"
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    signIn: (state,
             action) => {
      console.log("이게 호출돼야함!!")
      const {username, password} = action.payload;
      state.username = username;
      state.password = password;
      state.isSigned = true;
      state.status = "Initialized";
    }
  }
});

export const selectSign = (state: any) => state.user.isSigned;

export const {signIn} = userSlice.actions;

export default userSlice.reducer;
