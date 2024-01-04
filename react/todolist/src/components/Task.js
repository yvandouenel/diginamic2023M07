const Task = ({ task }) => {
  return (
    <section className="d-flex justify-content-between my-3">
      <label className={task.done ? "text-decoration-line-through" : ""}>{task.label}</label>
      <div>
        <button className="btn btn-success me-3">{task.done ? "Invalider" : "Valider"}</button>
        <button className="btn btn-danger">Supprimer</button>
      </div>
    </section>
  );
}

export default Task;