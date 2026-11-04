import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        //action
        increment: (state, actionByComponent) => {
            state.count++
        },
        decrement: (state, actionByDecrement) => {
            state.count--
        },
        reset: (state, actionByComponent) => {
            return { ...state, count: 0 }
        },
        incrementByAmount: (state, actionByComponent) => {
            state.count += actionByComponent.payload
        }

    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer
