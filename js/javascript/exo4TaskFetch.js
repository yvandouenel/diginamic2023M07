import FormTask from './components/FormTask.js';
import FetchJson from './services/FetchJson.js';
import Task from './components/Task.js';
// Afficher le formulaire (via le component FormTask)
new FormTask();

// Déclaration du tableau de tâches
let tasks = [];
// Aller chercher les données sur le serveur via un service FetchJson
FetchJson.loadTasks()
  .then(loaded_tasks => {
    console.log(`tasks dans le fichier d'entrée de l'application`, loaded_tasks);
    tasks = loaded_tasks;
    // Une fois que j'ai récupéré le tableau de tâches, je les transforme en éléments du 
    // DOM en passant par la class Task
    tasks.forEach(task => {
      new Task(task.label, task.done);
    });

  })
  .catch(error => {
    console.error("Erreur attrapée dans l'appel de loadTasks ", error)
  });



// Une fois que j'ai récupéré le tableau de tâches, je les transforme en éléments du
// DOM en passant par la class Task

// Gestion des événements sur Task