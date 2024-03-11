import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const phoneNumber = createSlice({
    name: "phone-number",
    initialState,
    reducers: {
        setPhoneNumber: (state, action) => {
            return action.payload;
        },
        clearPhoneNumber: () => {
            return "";
        },
    },
});

const {reducer, actions} = phoneNumber;

export const {setPhoneNumber, clearPhoneNumber} = actions
export default reducer;