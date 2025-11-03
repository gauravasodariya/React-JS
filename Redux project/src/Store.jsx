import { act } from "react"
import { createStore } from "redux"

const addTask='task/add'
const deleteTask='task/delete'

const initialState={
    task : [],
}

export const taskReducer = (state=initialState,action)=>{
    switch(action.type){
        case  addTask : 
        return {
            ...state,
            task : [...state.task,action.payload]
        }
        case deleteTask :
        return {
            ...state,
            task : state.task.filter((_,index)=> index !== action.payload)
        }
        default : 
        return state
    }
}
//create redux store
//dispatch is used to send action to the redux store.An action describes what change we want to make in the state.

export const store = createStore(taskReducer);