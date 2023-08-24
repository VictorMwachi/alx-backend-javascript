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
	const fileLines = fs
		.readFileSync(path, 'utf-8')
		.trim()
		.split('\n');
	const fieldIdx = db.split("\n")[0].split(",").indexOf("field")
	const firstnameIdx = db.split("\n")[0].split(",").indexOf("firstname")
	const studentGroups = {};
	const studentList = {};
	const data = fileLines.slice(1);
	for (idx in data){
		const student = data[idx].split(",");
		if(studentGroups[student[field]] === undefined){
			studentGroups[student[field]] = 1;
			if(studentList[student[field]] === undefined){
				studentList[student[field]]=[student[firstname]]
			}
		}
		else{
			studentGroups[student[field]]++;
			studentList[student[field]].push(student[firstname]);
		}
	}
	}
