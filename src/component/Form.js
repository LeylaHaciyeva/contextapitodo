import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/context";

const Form = () => {
  const { addTodo, todos, editItem, onEdit, setEditItem } = useContext(AppContext)
  const [text, setText] = useState("")

  onsubmit = (e) => {
    e.preventDefault()
    if (text.trim() !== "") {
      if (editItem === null) {
        addTodo(text)
        setText("")
      } else {
        onEdit(text, editItem.id)
        setText("")
        setEditItem(null)
      }
    }
  }
  useEffect(() => {
    if (editItem !== null) {
      setText(editItem.text)
    } else {
      setText("")
    }
  }, [editItem])
  return (
    <div>
      <form onSubmit={(e) => onsubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" >Create</button>
      </form>
    </div>
  )
}

export default Form
