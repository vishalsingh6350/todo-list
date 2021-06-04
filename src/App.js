import {useState,useContext} from 'react';
import Header from './myComponents/Header';
import Container from './myComponents/Container'
import Tasks from './myComponents/Tasks'
import {TasksProvider} from './Contexts/TasksContext'
function App() { 
  return (
    <>
    <TasksProvider>
    <Header title='Shopping'/>
    <Container/>
    </TasksProvider>
    </>
  );
}
export default App;