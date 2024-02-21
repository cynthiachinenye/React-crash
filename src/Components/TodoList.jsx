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
        const task = {
            id:todoList.length === 0 ? 1 : todoList[todoList.length -1].id+1,
            taskName: newTask,
            completed: false,
        }
    setTodoList([...todoList, task])
    }
    const removeTask = (id) =>{
        setTodoList(todoList.filter((task)=> task.id !== id))
    }
    const completeTask = (id) => {
        setTodoList(
            todoList.map((task)=>{
                if(task.id === id){
                    return 
                    { ...task, completed: true } ;
                }else{
                        return task
                    }
            })
        )
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
            <h3>{task.taskName}</h3>

             <button onClick={completeTask}>Complete</button>
            <button onClick={ () => removeTask(task.id)}>X</button>
            </div>
            )
        })
    }</div>
      
    </div>
  )
}

export default TodoList
