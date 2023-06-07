import "./App.css"

import { useState } from "react"
import ToDoList from "./components/ToDo/ToDoList";
import ToDoItem from "./components/ToDo/ToDoItem";

const App = () => {
  const [list, setList] = useState([]);

  const addTodo = (data) => {
    setList((prevState) => {
      return [...prevState, data]
    })
  }
  const buttonHandler = (id) => {
    setList(list.filter((elem) => elem.id !== id));
  }
  
  return (
    <div>
      <ToDoList onAddToDo={addTodo} />
      <ToDoItem onDelete={buttonHandler} items={list} />
    </div>
  )
}
export default App
