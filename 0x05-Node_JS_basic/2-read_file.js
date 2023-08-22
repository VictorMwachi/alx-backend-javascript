const fs = require('fs');
/**
 *@param {String} path The path to the CSV data file.
 */

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const lines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const dbFieldNames = lines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
