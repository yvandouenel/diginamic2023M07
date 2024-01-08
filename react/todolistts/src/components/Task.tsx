import TaskInterface from './../interfaces/TaskInterface';
interface TaskProps {
  task: TaskInterface;
 }  
const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <section>
      <h2>{task.label}</h2>
    </section>
  );
}

export default Task;