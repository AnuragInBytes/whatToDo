import React, { useState } from "react";
import { useTodo } from "../context";

const TodoItem = ({todo}) => {

    const {updateTodo, deleteTodo, completeTodo} = useTodo()

    const hoGayaTodo = () => {
        completeTodo(todo.id)
    }


    return(
        <div className="table-row-group bg-white">
            <div className="table-row text-md">
                <div className={`table-cell w-[30%] pl-5 pr-1 py-3 ${todo.isCompleted? 'bg-green-100 line-through' : 'bg-white'}`}></div>
                <div className="table-cell w-[30%] pl-5 pr-1 py-3"></div>
                <div className="table-cell w-[20%] pl-5 pr-1 py-3"></div>
                <div className="table-cell w-[20%] pl-5 pr-1 py-3">
                    <button onClick={hoGayaTodo} className="bg-green-300 text-green-900 text-xl px-5 py-1.5 rounded-full mr-1 hover:bg-green-400">
                        <i className="fa-solid fa-check"></i>
                    </button>
                    <button className="bg-yellow-300 text-yellow-900 text-xl px-5 py-1.5 rounded-full mr-1 hover:bg-yellow-400">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => deleteTodo(todo.id)} className="bg-red-300 text-red-900 text-xl px-5 py-1.5 rounded-full hover:bg-red-400">
                        <i className="fa-solid fa-bucket"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;