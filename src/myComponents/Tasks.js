import {useContext} from 'react'

import Task from './Task'
import {TasksContext} from '../Contexts/TasksContext'
const Tasks = ({}) => {
   let [task,settask]=useContext(TasksContext)
   {if(!task){
      return null;
   }}
    // function to delete the task
    const deleteTask=(id)=>{
        settask(task.filter((elem)=>elem.id!==id))
    }

    // //function to toggle the task
    const toggleTask=(id)=>{
    settask( task.map((elem) => elem.id === id? {...elem,done:!elem.done}:elem))
    }
    return (
        <>
            {task.map((elem) => (
                   <Task key={elem.id} value={elem} deleteFun={deleteTask} toggleFun={toggleTask}/>
            ))}
        </>
    );
};

export default Tasks;
