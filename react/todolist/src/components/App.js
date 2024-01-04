
import { useState } from 'react';
import './App.css';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  // création du state tasks en appelant la fonction useState
  const [tasks, setTasks] = useState([
    { label: "Faire des courses", id: 1, done: false },
    { label: "Offir des fleurs à xxx", id: 2, done: true },
    { label: "Faire la vaisselle", id: 3, done: false }
  ]);

  function handleClickValidate(taskId) {
    console.log(`Dans handleClickValidate, id : `, taskId);
    // Copie de l'état et modification en utilisant map
    const tasksCopy = tasks.map((task)=> {
      if(task.id === taskId) task.done = !task.done;
      return task;
    })

    // Modification de l'état
    setTasks(currentState => tasksCopy);
  }
  function handleClickDelete(task) {
    setTasks(tasks.toSpliced(tasks.indexOf(task), 1));
  }

  return (
    <div className="App container">
      <h1>Gestion des tâches</h1>
      {tasks.map((task) => 
      <Task 
      key={task.id} 
      task={task} 
      onClickValidate={handleClickValidate}
      onClickDelete={handleClickDelete}  

      />)}
    </div>
  );
}

export default App;
