import ManageDom from "./ManageDom.js";
import Task from "./Task.js";
export default class FormTask extends ManageDom {
  constructor() {
    super();
    this.form_element = this.render();
    this.handleEvents();
  }
  render() {
    const form = this.createMarkup("form", "", document.body,[{class: "d-flex gap-3 mt-3 align-items-center"}]);
    const label = this.createMarkup("label", "Tâche : ", form, [{ "for": "task" }]);
    const input = this.createMarkup("input", "", form, [{ "type": "text" }, { "id": "task" }, { "name": "task" }]);
    const submit_button = this.createMarkup("input", "", form, [{ "type": "submit" }, { "value": "Ajouter" },{class:"btn btn-success"}]);
    
    return form;
  }
  handleEvents() {
    // Si le mot clé function est employé, this représente l'instance appelante de la fonction (ici form).

    // Si l'expression clé => est employé, this représente l'instance de la classe dans laquelle la fonction a été déclarée.

    this.form_element.onsubmit =  (event) => {
      event.preventDefault();
      // Création de tâches ici
      //console.log(`Dans handleEvents du FormTask`, this.dom_elements.form);
      const formData = new FormData(this.form_element);
      const task = new Task(formData.get("task"));
    }
  }
  
}