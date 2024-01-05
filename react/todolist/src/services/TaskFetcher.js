export default class TaskFetcher {
  static url = 'http://localhost:3000/tasks';

  static loadTasks() {
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
  static patchTask(taskId, propertieToPatch) {
    return fetch(`${this.url}5/${taskId}`,
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
        if (res.status === 200) console.log(`La modification s'est bien passée`);
        else throw new Error("Problème serveur lors du patch. Statut : " + res.status);
      })
  }
  /**
   * Permet de supprimer une tâche
   * @param {number} taskId 
   */
  static deleteTask(taskId) {
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
}
