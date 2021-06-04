import {useContext,useState} from 'react'
import Tasks from './Tasks'
import Modal from './Modal'
import {TasksContext} from '../Contexts/TasksContext'
const Container = () => {
   let [task,settask]=useContext(TasksContext)
   const [modalState,setmodalState]=useState(false)
  let closeModalFun =()=>{
     setmodalState(false)
  }
   return ( 
      <>
         <div className="container">
                {task.length>0?<Tasks/>:"No tasks to show"}
                <button className='addBtn' onClick={()=>setmodalState(true)}>+</button>
         </div>
         {modalState? <Modal closeModal={closeModalFun}/>:''}
      </>
   );
}
export default Container;