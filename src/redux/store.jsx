import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import tabReducer from './slices/tabSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        main: tabReducer,
    },
});

export default store;
