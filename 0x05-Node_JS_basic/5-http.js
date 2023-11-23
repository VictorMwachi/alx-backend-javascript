const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, fdata) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (fdata) {
      const fileLines = fdata.toString()
        .trim()
        .split('\n');
      const field = fileLines[0].split(',').indexOf('field');
      const firstname = fileLines[0].split(',').indexOf('firstname');
      const studentGroups = {};
      const studentList = {};
      const data = fileLines.slice(1);
      for (let idx = 0; idx < data.length; idx += 1) {
        const student = data[idx].split(',');
        if (studentGroups[student[field]] === undefined) {
          studentGroups[student[field]] = 1;
          if (studentList[student[field]] === undefined) {
            studentList[student[field]] = [student[firstname]];
          }
        } else {
          studentGroups[student[field]] += 1;
          studentList[student[field]].push(student[firstname]);
        }
      }
      let output = `Number of students: ${data.length}\n`;
      Object.keys(studentList).forEach((key) => {
        output += `Number of students in ${key}: ${studentGroups[key]}. List: ${studentList[key].join(', ')}\n`;
      });
      output = output.trim();
      resolve(output);
    }
  });
});

const app = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.statusCode = 200;
    res.end();
  }
  if (url === '/students') {
    countStudents(process.argv[2])
      .then((output) => {
        res.write('This is the list of our students');
        res.write(output);
        res.statusCode = 200;
        res.end();
      });
  }
});
app.listen(1245, '127.0.0.1');
module.exports = app;
