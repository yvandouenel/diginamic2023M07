export default class FetchJson {
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
  static deleteTask(task_id) {
    return fetch(FetchJson.url_server + '/' + task_id,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
      })
      .then(function (response) { console.log(response) })
      .catch(function (res) { console.log(res) })
  }
  static patchTask(task_id, data_to_patch) {
    return fetch(FetchJson.url_server + '/' + task_id,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify(data_to_patch)
      })
      .then(function (response) { console.log(response) })
      .catch(function (res) { console.log(res) })
  }
}