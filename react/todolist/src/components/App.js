
import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.css';
import TaskFetcher from './../services/TaskFetcher';

function App() {
  // Utilisation du hook useEffect pour exécuter du code après le chargement du composant
  useEffect(() => {
    console.log(`Dans useEffect`);
    const taskFetcher = new TaskFetcher('http://localhost:3000/tasks');
    const promise = taskFetcher.loadTasks();
    promise.then(tasks => {
      setTasks(tasks);
    })
  }, []);
  console.log(`Dans APP`);
  // création du state tasks en appelant la fonction useState qui s'exécute avant le chargement du composant
  const [tasks, setTasks] = useState([]);

  function handleClickValidate(taskId) {
    console.log(`Dans handleClickValidate, id : `, taskId);
    // Copie de l'état et modification en utilisant map
    const tasksCopy = tasks.map((task) => {
      if (task.id === taskId) task.done = !task.done;
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
