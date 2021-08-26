import React, { createContext, useState, useEffect } from 'react'
import uuid from 'react-uuid';
import App from '../../App'

export const AppContext = createContext()
export const AppProvider = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("store")))
    localStorage.setItem("store", JSON.stringify(todos))
    const [editItem, setEditItem] = useState(null)
    const addTodo = (text) => {
        setTodos([...todos, { text, id: uuid() }])
    }
    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const findItem = id => {
        const item = todos.find(todo => todo.id === id)
        setEditItem(item)
    }
    const onEdit = (text, id) => {
        const newText = todos.map(todo => todo.id === id ? ({ text, id }) : todo
        )
        setTodos(newText)
    }
    useEffect(() => {
        localStorage.setItem("store", JSON.stringify(todos))
    }, [todos])
    return (
        <div>
            <AppContext.Provider value={{ todos, setTodos, addTodo, onDelete, onEdit, editItem, setEditItem, findItem }}>
                <App />
            </AppContext.Provider>
        </div>
    )
}

