export default class FetchJson{
  // static indique que c'est une variable de classe
  static url_server = "http://localhost:3000/tasks";

  static loadTasks() {
    return fetch(FetchJson.url_server)
    .then(response => {
      console.log(`response.status`, response.status);
      return response.json();
    })
    .then(tasks => {
      console.log(`tasks : `, tasks);
      return tasks;
    })
    .catch(error => {
      console.error("Erreur attrapée dans loadTasks ", error)
    })
  }
}