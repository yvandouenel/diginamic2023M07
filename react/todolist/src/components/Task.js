const Task = ({ task, onClickValidate, onClickDelete }) => {
  return (
    <section className="d-flex justify-content-between my-3">
      <label className={task.done ? "text-decoration-line-through" : ""}>{task.label}</label>
      <div>
        <button
          onClick={() => { onClickValidate(task.id) }}
          className={task.done ? "btn btn-warning me-3" : "btn btn-success me-3"}>{task.done ? "Invalider" : "Valider"}</button>
        <button
          onClick={() => { onClickDelete(task) }}
          className="btn btn-danger">Supprimer</button>
      </div>
    </section>
  );
}

export default Task;