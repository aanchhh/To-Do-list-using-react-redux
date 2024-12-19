import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
// import { login, logout } from './features/todo/authSlice'
import User from './components/User'

function App() {
  
  return (
    <>
    <div>
      <h1 className='text-center text-gray-100 drop-shadow-lg shadow-white font-bold text-3xl mt-8'>Learn about redux toolkit</h1>
      <User />
      {/* <button>Login</button> */}
      <AddTodo />
      <Todos />
      </div>
    </>
  )
}
export default App