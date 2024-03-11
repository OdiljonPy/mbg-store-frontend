import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const OtpKeySlice = createSlice({
    name: "otpKey",
    initialState,
    reducers: {
        setOtpKey: (state, action) => {
            return action.payload;
        },
        clearOtpKey: () => {
            return "";
        },
    },
});

const {reducer, actions} = OtpKeySlice;

export const {setOtpKey, clearOtpKey} = actions
export default reducer;