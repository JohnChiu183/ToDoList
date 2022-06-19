import AboutMe from './AboutMe.js'
import ToDoList from './ToDoList.js'
import LightBulb from './LightBulb.js'
import NewToDoItem from './NewToDoItem.js'
import {useState} from 'react'

function App() {

  // const todos = [
  //   { description: 'Finish the lecture', isComplete: true },
  //   { description: 'Do exercise', isComplete: false },
  //   { description: 'Drink Wine', isComplete: true }
  // ];

  const initialTodos = [
    { description: 'Finish the lecture', isComplete: true },
    { description: 'Do exercise', isComplete: false },
    { description: 'Drink Wine', isComplete: true },
    { description: 'Sleep', isComplete: true }
  ];

  const [todos,setTodos] = useState(initialTodos);

  
  return (
    <div>
      <h1>About me</h1>
      <AboutMe lastName="John" age="36"/>

      <h1>My light bulb</h1>
      <LightBulb />

      <h1>My todos</h1>
      <ToDoList items={todos} onTodoStatusChanged={(index, status) => {
        let updatedTodos = todos.slice(0);
        updatedTodos[index].isComplete = status;
        setTodos(updatedTodos);
      }} onTodoElementRemove={(index) =>{
        let updatedTodos = todos.slice(0);
        updatedTodos.splice(index,1)

        console.log(updatedTodos);
        setTodos(updatedTodos);
      }} />

      <NewToDoItem onAddTodo={(newDiscription) => 
          setTodos(
            [{ description: newDiscription, isComplete: false},
            ...todos]
          )

        }/>

    </div>
  );
}

export default App;