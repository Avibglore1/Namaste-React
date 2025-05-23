import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
    name: 'watchList',
    initialState:{
       items: []
    },
    reducers:{
        addItem: (state,action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state,action) =>{
            state.items.pop();
        },
        clearWatchList: (state) =>{
            state.items =[]
        }
    }
});

export const {addItem,removeItem,clearWatchList} =watchListSlice.actions;

export default watchListSlice.reducer;
