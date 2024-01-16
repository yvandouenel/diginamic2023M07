import TaskInterface from "../interfaces/TaskInterface";
export default class TaskFetcher {
  static url:string = 'http://localhost:3001/tasks';

  static loadTasks():Promise<TaskInterface[]> {
    return fetch(this.url)
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Le serveur n'a pas répondu correctement. Statut de l'erreur : " + response.status);
      })
      .then(tasks => {
        console.log(`tasks : `, tasks);
        return tasks;
      })
      .catch(error => {
        console.error("Erreur attrapée dans loadTasks " + error)
      })
  }
  /**
   * Permet de modifier une tâche
   * @param {number} taskId 
   * @param {object} propertieToPatch 
   */
  static patchTask(taskId:number, propertieToPatch: Partial<TaskInterface>):Promise<void> {
    return fetch(`${this.url}/${taskId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        //body: JSON.stringify({ "title": "Simon", "author": "Yvan" })
        body: JSON.stringify(propertieToPatch)
      })
      .then(function (res) {
        if (res.status === 200){
          console.log(`La modification s'est bien passée`);
        }
        else throw new Error("Problème serveur lors du patch. Statut : " + res.status);
      })
  }
  /**
   * Permet de supprimer une tâche
   * @param {number} taskId 
   */
  static deleteTask(taskId: number):Promise<void>  {
    return fetch(`${this.url}/${taskId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
      })
      .then(function (res) {
        if (res.status === 200) console.log(`La suppression s'est bien passée`);
        else throw new Error("Problème serveur lors du delete. Statut : " + res.status);
      })
  }
   /**
   * Permet d'ajouter une tâche
   * @param {object} task 
   */
   static addTask(task: Omit<TaskInterface, "id">): Promise<void>{
    return fetch(`${this.url}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        //body: JSON.stringify({ "title": "Simon", "author": "Yvan" })
        body: JSON.stringify(task)
      })
      .then(function (res) {
        if (res.status === 201) console.log(`L'ajout s'est bien passé`);
        else throw new Error("Problème serveur lors du post. Statut : " + res.status);
      })
  }
}
