import React, {createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'abc',
            dueDate: 'kdkj',
            isCompleted: false,
        },
    ],
    addTodo: (todo, dueDate) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo, dueDate) => {},
    completeTodo: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider     