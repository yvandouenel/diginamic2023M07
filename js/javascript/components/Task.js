import ManageDom from "./ManageDom.js";
export default class Task extends ManageDom {
  constructor(label) {
    super();
    this.label = label;
    this.render();
  }
  render() {
    const section = this.createMarkup("section", "", document.body,[{class: "task"}]);
    const h2 = this.createMarkup("h2", this.label, section);
  }

}