import { useEffect, useState } from 'react'
import './App.css'
import {TodoForm, TodoItem} from './components/index'
import {useTodo, TodoContext, TodoContextProvider} from './context'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    console.log(todos)
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id!==id))
  }

  const updateTodo = (todo, id, dueDate) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id===id? {todo, dueDate} : prevTodo))
  }

  const completeTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id? {isCompleted: !prevTodo.isCompleted, ...prevTodo} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length>0){
      setTodos(todos)
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleToggle = () => {
    const dropdown = document.querySelector('#dropdown-menu')
    dropdown.classList.toggle('hidden')
  } 


  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, updateTodo, completeTodo}}>
      <div id='background' className='bg-gray-50 w-full h-screen flex flex-col justify-center items-center'>
        <div id="card" className='bg-white shadow-2xl w-full md:w-2/3 rounded-lg flex flex-col justify-center items-center'>
          <div className="flex flex-col justify-center items-center w-full pt-5">
            <h1 className="text-[#291334] font-mono text-4xl font-bold mb-5">WhatToDo!!</h1>
            <TodoForm />
            <div className=" mt-8 mb-4 w-full flex justify-between items-center md:px-10">
              <div className="relative select-none">
                  <button onClick={handleToggle} id="dropdown-btn" className="bg-[#200f29] px-5 py-4 text-sm uppercase font-bold text-[#e0b0f8] rounded-full cursor-pointer active:scale-[0.9] transition ease-linear">filter</button>

                  <div id="dropdown-menu" onClick={handleToggle} className="absolute bg-white shadow-lg top-[110%] left-0 w-[200%] hidden transition ease-linear">
                      <a href="#" className="block px-5 py-2.5 text-sm hover:bg-gray-300 rounded-full">All</a>
                      <a href="#" className="block px-5 py-2.5 text-sm hover:bg-gray-300 rounded-full">Pending</a>
                      <a href="#" className="block px-5 py-2.5 text-sm hover:bg-gray-300 rounded-full">Completed</a>
                  </div>
              </div>
              
              <button className="bg-pink-300 px-5 py-4 text-sm uppercase font-bold  text-[#52001e] rounded-full cursor-pointer hover:bg-pink-400 transition ease-linear active:scale-[0.9]">delete all</button>
            </div>
            
            <div className=" w-full mt-4 md:px-10">
              <div className="table w-full rounded-lg">

                <div className="table-header-group bg-gray-300">
                    <div className="table-row text-[#200f29] font-bold uppercase">
                        <div className="table-cell px-5 py-3.5 rounded-l-lg">task</div>
                        <div className="table-cell px-5 py-3.5">duedate</div>
                        <div className="table-cell px-5 py-3.5">status</div>
                        <div className="table-cell px-5 py-3.5 rounded-r-lg">action</div>
                    </div>
                </div>
                {
                  todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
