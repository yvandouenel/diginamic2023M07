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
}