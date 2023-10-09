import ManageDom from "./ManageDom.js";
export default class Task extends ManageDom {
  constructor(label) {
    super();
    this.label = label;
    this.render();

    // appel de la méthode qui gère les événement 
  }
  render() {
    const section = this.createMarkup("section", "", document.body,[{class: "task"}]);
    const h2 = this.createMarkup("h2", this.label, section);

    // Création du bouton valider

    // Création du bouton supprimer

    // Renvoie de la référence vers les deux boutons
  }
  manageEvents() {
    // Gestion du click sur supprimer

    // Gestion du click sur valider
  }

}