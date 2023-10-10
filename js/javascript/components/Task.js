import ManageDom from "./ManageDom.js";
export default class Task extends ManageDom {
  constructor(label, done = false) {
    super();
    this.label = label;
    this.done = done;
    this.dom_elements = this.render();

    // appel de la méthode qui gère les événements 
    this.manageEvents();
  }
  render() {
    const section = this.createMarkup("section", "", document.body, [{ class: "task d-flex gap-3 mt-3" }]);
    // Opérateur ternaire
    const class_css = this.done ? 'strike' : '';
    const h2 = this.createMarkup("h2", this.label, section, [{class: class_css}]);

    // Création du bouton valider
    const button_validate = this.createMarkup("button", "Valider", section, [{ class: "btn btn-success ms-3" }]);
    // Création du bouton supprimer
    const button_delete = this.createMarkup("button", "Supprimer", section, [{ class: "btn btn-danger ms-3" }]);

    // Renvoie de la référence vers les deux boutons
    return {
      section,
      h2,
      button_validate,
      button_delete
    };
  }
  manageEvents() {
    // Gestion du click sur supprimer
    this.dom_elements.button_delete.onclick = (event) => {
      console.log(`dans onclick du bouton delete`);
      this.dom_elements.section.remove();

      // Comment faire en sorte que cela supprime également la tâche sur le serveur ?

      // En cas de problème, à minima, afficher dans le body qu'il y a eu un problème pour supprimer la tâche sur le serveur
    }
    // Gestion du click sur valider
    this.dom_elements.button_validate.onclick = (event) => {
      console.log(`dans onclick du bouton validate`);
      this.done = !this.done;
      if(this.done) {
        this.dom_elements.h2.classList.add("strike");
        this.dom_elements.button_validate.innerText = "Invalider";
      }
      else {
        this.dom_elements.h2.classList.remove("strike");
        this.dom_elements.button_validate.innerText = "Valider";
      }
    }
  }

}