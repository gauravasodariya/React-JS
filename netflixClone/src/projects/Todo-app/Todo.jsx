import './Todo.css'
import { useState } from 'react'
import {MdCheck,MdDeleteForever} from 'react-icons/md'

export const Todo = () =>{
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])
    const [dateTime,setDateTime]=useState("")

    const handleInputChange=(value)=>{
        setInputValue(value)
    } 

const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
        alert("Please enter a task!");
        return;
    }
    if (task.includes(inputValue)) {
        alert("Task already exists!");
        setInputValue("");
        return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
};

setInterval(()=>{
    const now=new Date();
    const date=now.toLocaleDateString();
    const time=now.toLocaleTimeString();
    setDateTime(`${date} - ${time}`)
},1000)

const handleDeleteTodo=(value)=>{
    const updatedtask=task.filter((currTask)=>{
        return currTask!=value  
    })
    setTask(updatedtask)
}

const handleClear=()=>{
    setTask([])
}

    return (
        <section className='todo-container'>
            <header>
                <h2>Todo List</h2>
                <h3>{dateTime}</h3>
            </header>
            <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" 
                        className='todo-input' 
                        autoComplete='off' 
                        value={inputValue}
                        onChange={(e)=>{
                            handleInputChange(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                    </div>
                </form>
            </section>
            <section className='myUnordList'>
                <ul>
                    {
                        task.map((currTask,index)=>{
                            return (<li key={index} className='todo-item'>
                                <span>{currTask}</span>
                                <button className='check-btn'><MdCheck/></button>
                                <button className='delete-btn' 
                                onClick={()=>handleDeleteTodo(currTask)}>
                                <MdDeleteForever></MdDeleteForever></button>
                            </li>
                            )
                        })}
                </ul>
            </section>
            <section className='clear-btn' onClick={handleClear}>Clear All</section>
        </section>
    )
}