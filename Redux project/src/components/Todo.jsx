import { useSelector,useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";
import { useState } from "react";

export const Todo = () => {

    const [task,setTask]=useState("");

    const tasks= useSelector((state)=>{
        return state.task
    }
)

    const dispatch = useDispatch(); //it gives dispatch function to send action to the redux store
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        dispatch({type : 'task/add', payload : task});
        setTask("");
    }
    const handleTaskDelete=(index)=>{
        dispatch({type : 'task/delete', payload : index});
    }


  return (
    <div className="contrainer">   
        <div className="todo-app">
            <h2 className="title">To-do List</h2>
            <div className="row">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" 
                    id="input-box"
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}
                    placeholder="Add your task here..." />
                    <button type="submit">Add Task</button>
                </form>
            </div>
            <ul id="list-container">
                {tasks.map((currTask,index)=>{
                    return(
                        <li key={index}>
                        <p>{index+1} : {currTask}</p>
                        <div>
                            <MdDeleteForever 
                            className="icon-style" 
                            onClick={()=>{handleTaskDelete(index)}} />
                        </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    )
}
