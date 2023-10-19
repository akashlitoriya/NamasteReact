import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
        total: 0,
    },
    reducers:{
        addItem: (state, action) =>{
            const foodItem = action.payload;
            const item = state.items.findIndex((item) => item.id === foodItem.id);
            if(item >= 0){
                toast.error("Item already in cart")
                return
            }
            state.items.push(action.payload);
            state.total += action.payload.price / 100;
            toast.success("Item added successfully");
        },
        removeItem: (state, action) => {
            const reducedItem = state.items.filter(
                (item)=> item.id != action.payload.id,
            );
            state.items = reducedItem;
            const priceRemoved = action.payload.price/100;
            state.total = state.total - priceRemoved;
            state.total = state.total < 0 ? 0: state.total;
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
            toast.success("Cart Cleared")
        },
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;