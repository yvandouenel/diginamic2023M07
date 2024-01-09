import { useEffect, useState } from 'react';
import './App.css';
import TaskInterface from '../interfaces/TaskInterface';
import Task from './Task';
import TaskFetcher from '../services/TaskFetcher';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([])
  useEffect(() => {
    TaskFetcher.loadTasks()
      .then((tasks: TaskInterface[]) => {
        setTasks(tasks);
      })
  }, [])

  function handleClickValidate(taskId: number): void {
    console.log(`handleClickValidate`, taskId);

    // Modification du state et exactement de la propriété done pour la tâche concernée
    let propertyToPatch: Partial<TaskInterface> | null = null;
    const tasksCopy: TaskInterface[] = tasks.map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
        propertyToPatch = { done: task.done }
      }
      return task;
    })
    setTasks((currentState) => tasksCopy);

    // Modification de db.json via le service
    // Narrowing : rétrécissement, on appelle patchTask que dans le cas où propertyToPatch n'est pas
    if(propertyToPatch) TaskFetcher.patchTask(taskId, propertyToPatch);
  }
  return (
    <div className="App container">
      <h1>Todo List</h1>
      {[...tasks].sort((a: TaskInterface, b: TaskInterface) => (Number(a.done) - Number(b.done))).map((task: TaskInterface) => <Task key={task.id} task={task} onClickValidate={handleClickValidate} />)}

    </div>
  );
}

export default App;
