import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart', //name of slice is cart
    initialState: {
        items: [], //initial state of cart is empty array
    },
    reducers: {
        addItem:(state,action)=>{
            state.items.push(action.payload);   //state=prev state, 
        },
        removeItems: (state,action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items=[];
        },
    },
});

// syntax hi aisa hai react-redux ka
export const {addItem, removeItem, clearCart} =cartSlice.actions;

export default cartSlice.reducer;