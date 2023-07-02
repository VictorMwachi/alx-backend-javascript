export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== 'Building') {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new TypeError('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number!');
    }
    this._sqft = value;
  }
}
