import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import authReducer from '../features/todo/authSlice'; 

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        auth: authReducer,
    }
})