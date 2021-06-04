import React,{useState,createContext} from 'react'
export const TasksContext = createContext();

export const TasksProvider = props=>{
   const [task, settask] = useState([
      {
          id: 1,
          text: "Welcome to your todolist!",
          done: false,
      },
      {
          id: 2,
          text: "Hit + button to add a new item",
          done: false,
      },
      {
          id: 3,
          text: "hit this button to delete an item --> ",
          done: true,
      } 
])

   return <TasksContext.Provider value={[task,settask]}>{props.children}</TasksContext.Provider> ;
}
