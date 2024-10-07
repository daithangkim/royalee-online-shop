import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentTab: 'home'
};

const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        setTab: (state, action) => {
            state.currentTab = action.payload;
        },
    },
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;
