import React, { useContext, useEffect } from 'react'
import ListItem from "./ListItem";
import { AppContext } from './context/context'

const List = () => {
  const { todos } = useContext(AppContext)
  return (
    <ul>
      {
        (JSON.parse(localStorage.getItem("store"))) ? ((JSON.parse(localStorage.getItem("store")).map((todo, index) => {
          return <ListItem key={index} todo={todo} />
        })))
          : (<div>bosdur</div>)
      }
    </ul>

  )
}

export default List