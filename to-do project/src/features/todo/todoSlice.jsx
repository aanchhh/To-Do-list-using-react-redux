//todoSlice: it basically consists of the data/feature/function
//it passes data to the store.jsx
//has two main methods - createSlice (allows to create feature), initialState (defines what happens before the user i/p)
import {createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = {
    todos: [{id: 1, text: "Learning React-Redux"}] //deafult-values already displayed when page is loaded, state:0 
}
export const todoSlice = createSlice({ //passed to store
    name: 'todo', 
    initialState,
    reducers: { //consists of the features/ functions 
        addTodo: (state, action) => { //every function can have two functionalities - state and action
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) //payload comes with action: used with dispatch - when some info is passed when an action is performed, payload is used
        },
    }
})
export const {addTodo, removeTodo} = todoSlice.actions //exported individually because they can be independently used
export default todoSlice.reducer //used in store