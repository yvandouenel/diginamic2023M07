import ManageDom from "./ManageDom.js";

export default class Converter extends ManageDom {
  constructor(rate) {
    super();
    this.rate = rate;
    this.dom_elements = this.render();
    this.handleEvents();
  }
  render() {
    const form = this.createMarkup("form", "", document.body);
    const label_euro = this.createMarkup("label", "Euro", form, [{ "for": "euro" }]);
    const input_euro = this.createMarkup("input", "", form, [{ "id": "euro" }, { type: "number" }, { placeholder: 0 }]);

    const label_chf = this.createMarkup("label", "CHF", form, [{ "for": "chf" }]);
    const input_chf = this.createMarkup("input", "", form, [{ "id": "chf" }, { type: "number" }, { placeholder: 0 }]);
    return {
      input_euro,
      input_chf
    }
  }
  handleEvents() {
    this.dom_elements.input_euro.oninput = () => {
      this.dom_elements.input_chf.value = (this.dom_elements.input_euro.value * this.rate).toFixed(2);
    }
    this.dom_elements.input_chf.oninput = () => {
      this.dom_elements.input_euro.value = (this.dom_elements.input_chf.value / this.rate).toFixed(2);
    }

  }
}