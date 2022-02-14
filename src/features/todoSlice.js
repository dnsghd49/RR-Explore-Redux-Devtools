import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        removeOne: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if (index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        cleartodo: () => {
            return { todo: [] }
        }
    }
})

export const { addTodo, removeOne, clearTodo } = todoReducer.actions
export default todoReducer