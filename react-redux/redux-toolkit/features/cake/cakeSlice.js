import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 10
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        }
    }
})

// commonJS Syntax
// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions

// ES6 syntax
export const cakeReducer = cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;