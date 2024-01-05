
import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.css';
import TaskFetcher from './../services/TaskFetcher';

function App() {
  // Utilisation du hook useEffect (asynchrone) pour exécuter du code après le chargement du composant
  useEffect(() => {
    const promise = TaskFetcher.loadTasks();
    promise.then(tasks => {
      setTasks(tasks);
    })
  }, []);

  // création du state tasks en appelant la fonction useState qui s'exécute avant le chargement du composant
  const [tasks, setTasks] = useState([]);

  function handleClickValidate(taskId) {
    console.log(`Dans handleClickValidate, id : `, taskId);
    // Copie de l'état et modification en utilisant map
    let propertieToPatch = null;
    const tasksCopy = tasks.map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
        propertieToPatch = {
          done: task.done
        }
      }
      return task;
    })

    // Modification de l'état
    setTasks(currentState => tasksCopy);

    // Modification des données sur le server json-server
    if(propertieToPatch) TaskFetcher.patchTask(taskId, propertieToPatch);
    
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
