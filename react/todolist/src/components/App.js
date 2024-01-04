
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

  return (
    <div className="App container">
      <h1>Gestion des tâches</h1>
      {tasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
}

export default App;
