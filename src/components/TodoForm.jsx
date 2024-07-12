import React, { useState } from "react"
import { useTodo } from "../context"

const TodoForm = () => {

    const [todo, setTodo] = useState("")
    const [dueDate, setDueDate] = useState("")

    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault();
        if(!todo){
            alert('chal be lawde')
            return
        } else{
            addTodo({todo, isCompleted: false, dueDate})  //destructure karke likha hai !!! todo: todo, dueDate: dueDate :)
            setTodo("")     
            setDueDate("")
        }
    }

    return(
            <form 
            onSubmit={add}
            className="w-full flex justify-between items-center md:px-10">
                <input 
                className="border border-pink-300 text-xl px-4 py-3 rounded-full focus:outline-pink-400 w-[50%] text-[#52001e]" 
                placeholder="Add a Todo..." 
                value={todo} // isko wiring bolte hai
                onChange={(e) => setTodo(e.target.value)}
                type="text" />

                <input 
                className="border border-pink-300 text-xl px-4 py-3 rounded-full focus:outline-pink-400 w-[40%] text-[#52001e] cursor-pointer" 
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                type="date" />

                <button 
                type='submit'
                className="bg-pink-300 px-6 py-3 text-[#52001e] rounded-full font-bold text-2xl hover:bg-pink-400 active:scale-[0.9] transition ease-linear">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form> 
    )
}
export default TodoForm;