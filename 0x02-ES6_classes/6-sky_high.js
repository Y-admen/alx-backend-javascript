import BUIDING from './5-building';

export default class SkyHighBuilding extends BUIDING {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());
