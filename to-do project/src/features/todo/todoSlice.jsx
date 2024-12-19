import { createSlice, nanoid } from '@reduxjs/toolkit';
//two methods are passed in nameSlic.jsx (naming convention),
//1. createSlice and 2. initialState -> createSlice is used for create the feature and passing it to the reducer in store, initialState defines the initial state.
//nanoid can be defined to give unique value to your data structure items.
const initialState = {
    todos: [{
        id:1,
        text: 'I am learning React-Redux'
    }]
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{//addToDo and removeToDo are properties/ functions
        addTodo: (state, action) => {
            const todo = {
                id:nanoid(),
                text:action.payload //payload is an object
            }
            state.todos.push(todo)
        }, //state and action-> state manages and tells the current status of the item, action is basically providing the action for whatever add/remove is being performed.
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
             todo.id !== action.payload
            )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions //individual export the functions because their used independently in components

export default todoSlice.reducer