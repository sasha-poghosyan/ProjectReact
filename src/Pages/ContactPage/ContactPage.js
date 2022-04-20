import { useState } from 'react'
import ToDoForm from '../../Components/ToDoForm/ToDoForm'
import './ContactPage.css'
import ToDo from '../../Components/ToDo/ToDo'


export default function ContactPage(){
    const [todos,setTodos]=useState([])
    const addTask =(userInput)=>{
        if(userInput){
            const newItem={
                id:Math.random().toString().substr(2,9),
                task:userInput,
                complete:false
            }
            setTodos([...todos,newItem])
            console.log(newItem);
        }
    }

const removeTask =(id)=>{
    setTodos([...todos.filter((todo)=>todo.id !==id)])
}

const handleToggle=(id)=>{
    setTodos([...todos.map((todo)=>
        todo.id ===id? {...todo,complete:!todo.complete}:{...todo}
    )])
}
    return(
       <div>
           <div>
               <h1>Set:{todos.length}</h1>
           </div>
           <ToDoForm addTask={addTask}/>
           {todos.map((todo)=>{
               return(
                   <ToDo
                   todo={todo}
                   key={todo.id}
                   toggeleTask={handleToggle}
                   removeTask={removeTask}
                   />
               )
           })}
       </div>
       
    )
}