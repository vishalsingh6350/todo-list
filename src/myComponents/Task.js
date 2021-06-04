
import {FaTimes} from 'react-icons/fa'

const Task = ({value,deleteFun,toggleFun}) => {
   // let click=()=>{console.log('clicked');}
   return (
      <div className={`task ${value.done?'done':''}`} onDoubleClick={()=>toggleFun(value.id)}>
         <h3 >{value.text}</h3>
         <FaTimes style={{color:'#996dde', cursor:'pointer'}} onClick={()=>deleteFun(value.id)}/>
      </div>
   )
}

export default Task
