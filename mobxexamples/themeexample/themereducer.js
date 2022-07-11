import { createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from '@react-navigation/native';

const changeSlice = createSlice({
    name: "changeTheme",
    initialState: {
        value:"",
    },
    reducers: {
        change: (state,action) => {

            state.value = action.payload;
        }

    },
});

export const { change } = changeSlice.actions;

export default changeSlice.reducer;

