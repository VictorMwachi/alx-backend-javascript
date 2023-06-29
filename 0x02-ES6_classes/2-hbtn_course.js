/**
* class HolbertonCourse
*/
export default class HolbertonCourse {
  /**
   *
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * gets name
   */
  get name() {
    return this._name;
  }

  /**
   * sets the name of course
   */

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  /**
   * gets length
   */

  get length() {
    return this._length;
  }

  /**
   * sets the length of course
   */

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  /**
   * gets an array students names
   * in this course
   */

  get students() {
    return this._students;
  }
  /**
   * sets students names in the course
   */

  set students(list) {
    if (!(list instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    list.forEach((name) => {
      if (typeof name !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
    this._students = list;
  }
}
