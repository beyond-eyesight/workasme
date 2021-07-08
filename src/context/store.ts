import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "src/pages/counter/counterSlice";
import signReducer from './signSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sign: signReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
