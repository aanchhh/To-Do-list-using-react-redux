import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  
  return (
    <>
    <div>
      <h1 className='text-center text-blue-950 font-bold text-3xl mt-8'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
      </div>
    </>
  )
}
export default App