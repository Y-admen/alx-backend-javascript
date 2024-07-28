export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    // allows you to customize how an object is converted to a
    // primitive value (such as a number)
    return this._size;
  }

  toString() {
    // allows you to customize how an object is converted to a string
    // allows you to customize how an object is converted to a
    // primitive value (such as a number)
    return this._location;
  }
}
