import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slices/authSlice";
import commentReducer from './slices/commentSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        comment: commentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
