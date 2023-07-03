function updateStudentGradeByCity(students, city,newGrades){
	if (students instanceof Array && newGrades instanceof Array) {
		students.filter((student) => student.location === city)
		.map((student)=> {
			const studentsGrades = newGrades.filter(studentId === student.id));}
}

