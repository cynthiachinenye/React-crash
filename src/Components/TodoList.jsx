import { useState } from 'react'
import './Styles/todolist.css'

const TodoList = () => {
    const [todoList,setTodoList] = useState([]);
    const[newTask, setNewTask] = useState("");

    const handleTask = (e)=>{
        setNewTask(e.target.value)
        console.log(e)

    }
    const addList =()=>{
    setTodoList([...todoList,newTask])
    }

  return (
    <div className='wrapper'>
    <div className='task'>
    <input onChange={handleTask}/>
    <button onClick={addList}>Add Task</button>
    </div>
    <div className='list'>
    {
       todoList.map((task)=>{
            return (            <div>
            <h3>{task}</h3>
            </div>
            )
        })
    }</div>
      
    </div>
  )
}

export default TodoList
