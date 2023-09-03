import { createSlice } from "@reduxjs/toolkit";


const hamburgerSlice = createSlice({
    name:"hamburger",
    initialState:{
        clicked: false,
    },
    reducers:{
        clickedHamburger: (state) => {
            state.clicked = !state.clicked;
        }
    }
})


export const{clickedHamburger} = hamburgerSlice.actions;
export default hamburgerSlice.reducer;