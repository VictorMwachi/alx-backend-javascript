const fs = require('fs');
/**
 *@param {String} path The path to the CSV data file.
 */

const countStudents = (path) => new Promise((resolve, reject) => {
    fs.read(path, 'utf-8', (err, fdata) => {
	    if (err) {
		    reject(throw new Error('Cannot load the database'));
	    }
	    if (data) {
		    const fileLines = fs
			    .read(fdata, 'utf-8')
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
			    }
			    else {
				    studentGroups[student[field]] += 1;
				    studentList[student[field]].push(student[firstname]);
			    }
		    }
		    console.log(`Number of students: ${data.length}`);
		    Object.keys(studentList).forEach((key) => {
			    console.log(`Number of students in ${key}: ${studentGroups[key]}. List: ${studentList[key].join(', ')}`);
		    });
	    };
    });
}
module.exports = countStudents;
