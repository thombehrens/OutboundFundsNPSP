import { LightningElement, track, api } from "lwc";

export default class ManageExpenditures extends LightningElement(
  LightningElement
) {
  @api parentId;
  @api parentName;
  @api gaueString;
  @api gauExpenditures;
  @track numbers = [1];

  connectedCallback() {
    this.gauExpenditures = JSON.parse(this.gaueString);
  }

  addRow() {
    this.numbers.push(this.numbers[this.numbers.length - 1] + 1);
  }

  handleDelete(event) {
    if (this.numbers.length > 1) {
      this.numbers.splice(this.numbers.indexOf(event.detail), 1);
    }
  }
}
