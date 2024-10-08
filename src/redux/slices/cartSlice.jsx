import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalSum: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const price = parseFloat(action.payload.price.replace(/[^0-9.-]+/g, ""));
            const isItemExistent = state.items.find(item => item.id === action.payload.id);
            if (isItemExistent) {
                isItemExistent.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1, price }); // Add new item with price as number
            }
            // Update totalSum
            state.totalSum = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            // Update totalSum
            state.totalSum = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalSum = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
