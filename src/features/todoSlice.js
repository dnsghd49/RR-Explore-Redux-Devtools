import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        increment: (state) => {
            return { value: state.value + 1 }
        },
        decrement: (state) => {
            return { value: state.value - 1 }
        },
        incrementByAmount: (state, action) => {
            return { value: state.value + action.payload }
        }
    }
})

export const { increment, decrement, incrementByAmount } = todoReducer.actions
export default todoReducer