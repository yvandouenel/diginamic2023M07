import { useState } from 'react';
import './App.css';
import TaskInterface from '../interfaces/TaskInterface';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([
    {id: 1, label: "Faire le ménage", done: false},
    {id: 2, label: "Faire du sport", done: true}
  ])
  return (
    <div className="App">
     <h1>Todo List</h1>
     {tasks.map((task:TaskInterface) => <Task key={task.id} task={task}/>)}
    </div>
  );
}

export default App;
