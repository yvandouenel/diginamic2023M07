import { useEffect, useState } from 'react';
import './App.css';
import TaskInterface from '../interfaces/TaskInterface';
import Task from './Task';
import TaskFetcher from '../services/TaskFetcher';

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([])
  useEffect(() => {
    TaskFetcher.loadTasks()
      .then((tasks: TaskInterface[]) => {
        setTasks(tasks);
      })
  }, [])
  return (
    <div className="App">
      <h1>Todo List</h1>
      {tasks.map((task: TaskInterface) => <Task key={task.id} task={task} />)}
    </div>
  );
}

export default App;
