export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
