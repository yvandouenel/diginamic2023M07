
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

  // Gestion des erreurs
  const [error, setError] = useState("");

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
    if (propertieToPatch) {
      const promise = TaskFetcher.patchTask(taskId, propertieToPatch);
      promise
        .catch(error => {
          console.error("Erreur attrapée dans handleClickValidate " + error);
          setError(error.message);
          const promise = TaskFetcher.loadTasks();
          promise.then(tasks => {
            setTasks(tasks);
          })
          setTimeout(() => {
            setError("");
          }, 3000)
        })
    }

  }
  function handleClickDelete(task) {

    // confirmation
    if (window.confirm("Etes vous sûr de vouloir supprimer cette tâche ?")) {
      setTasks(tasks.toSpliced(tasks.indexOf(task), 1));
      // Suppression de la tâche sur le server json-server
      if (task) {
        const promise = TaskFetcher.deleteTask(task.id);
        promise.catch(error => {
          console.error(`Erreur attrapée dans handleClickDelete ` + error);
          // Affichage de l'erreur 
          setError(error.message);
          // Afficher les tâches présentes sur le serveur
          const promise = TaskFetcher.loadTasks();
          promise.then(tasks => {
            setTasks(tasks);
          })
        })
      }
    }

  }

  return (
    <div className="App container">
      <h1>Gestion des tâches</h1>
      {error && (<p className="text-danger">Une erreur est survenue : {error}</p>)}
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
