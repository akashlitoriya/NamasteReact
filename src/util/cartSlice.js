import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
        total: 0,
    },
    reducers:{
        addItem: (state, action) =>{
            state.items.push(action.payload);
            state.total += action.payload.price / 100;
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
        },
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;