import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            state.items.push(product)
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;