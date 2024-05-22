"use client"
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const themeReducer = createSlice({
    name:"theme",
    initialState:{
        mode:true,
    },
    reducers:{
        toggleTheme:(state:any)=>{
            state.mode = !state.mode
        }
    }
})
export const {toggleTheme} = themeReducer.actions;
export const themeSelector = (state:any)=>state.theme
export default themeReducer.reducer