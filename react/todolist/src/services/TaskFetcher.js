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
  static patchTask(taskId, propertieToPatch){
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
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
  }
}