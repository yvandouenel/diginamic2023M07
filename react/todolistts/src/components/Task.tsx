import TaskInterface from './../interfaces/TaskInterface';
interface TaskProps {
  task: TaskInterface;
  onClickValidate: (taskId: number) => void;
}
const Task: React.FC<TaskProps> = ({ task, onClickValidate }) => {
  return (
    <section className='d-flex justify-content-between my-3'>
      <h2 className={task.done ? "h4 text-decoration-line-through" : "h4"}>{task.label}</h2>
      <div >
        <button
          onClick={() => {
            onClickValidate(task.id)
          }}
          className={task.done ? "btn btn-warning me-3" : "btn btn-success me-3"}>
          {task.done ? "Invalider" : "Valider"}
        </button>
        <button className="btn btn-danger">Supprimer</button>
      </div>
    </section>
  );
}

export default Task;