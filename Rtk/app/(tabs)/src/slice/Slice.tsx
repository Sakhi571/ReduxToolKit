import { createSlice } from "@reduxjs/toolkit";
const initialState  = [];
const Slice = createSlice({
    name: 'cart',
    initialState ,
    reducers: {
        addCartItem(state, action){
            state.push(action.payload);
        },
        removeCardItem(state, action){
            return state.filter(item => item.id !== action.payload.id);
        },
    },
});
export const {addCartItem, removeCardItem} = Slice.actions;
export default Slice.reducer;