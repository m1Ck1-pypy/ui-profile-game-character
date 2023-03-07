import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characteristic: {
        power: 0,
        agility: 0,
        intelligence: 0,
        charisma: 0,
    },
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {},
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
