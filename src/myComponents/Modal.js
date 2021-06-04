import {useContext,useState} from 'react'
import {TasksContext} from '../Contexts/TasksContext'
const Modal = ({closeModal}) => {
   let [task,settask]=useContext(TasksContext)
   const [inputVal,setinputVal]=useState('')
   let addTask=()=>{
      settask([...task,{
         id: task[task.length-1].id+1,
         text: inputVal,
         done: false
     }])
     console.log(task)
      // console.log(task[task.length-1].id)
      closeModal()
   }
   return (
      <>
         <div className="overlay">
            <div className='modal'>
               <h3 className='title'>Add task</h3>
               <input type="text" placeholder='enter your task here' className='inputField' onChange={(e)=>setinputVal(e.target.value)}/>
               <button className='submitBtn' onClick={addTask} >Add task</button>
               <button className='cancelBtn' onClick={closeModal}>cancel</button>
            </div>
         </div>
      </>
   )
}

export default Modal
