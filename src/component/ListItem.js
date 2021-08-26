import React, { useContext, useState } from 'react'
import { AppContext } from './context/context'

const ListItem = ({ todo }) => {
  const { onDelete, findItem } = useContext(AppContext)
  return (

    <li>
        {todo.text}
      <div>
        <i
          title="Edit"
          className="fas fa-pen"
          onClick={() => findItem(todo.id)}
        ></i>
        <i
          title="Delete"
          className="fas fa-trash"
          onClick={e => onDelete(todo.id)}
        ></i>
      </div>
    </li>
  )
}
export default ListItem