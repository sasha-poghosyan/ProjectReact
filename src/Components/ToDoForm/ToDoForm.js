import { useState } from "react";
import './ToDoForm.css'


function ToDoForm({addTask}){
    const [userInput,setUserInput]=useState('')



    const handleChange =(e)=>{
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    const handlekeyPress=(e)=>{
        if(e.key==='Enter'){
            handleSubmit(e)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="inpForm"
            value={userInput}
            type='text'
            onChange={handleChange}
            onKeyDown={handlekeyPress}
            placeholder='Grel nshanakutyun......'
            />
            <button className="butForm">Save</button>

        </form>
    )
}
export default ToDoForm