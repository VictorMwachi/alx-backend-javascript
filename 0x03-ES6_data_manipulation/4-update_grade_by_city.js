export default function updateStudentGradeByCity(students, city, newGrades) {
  students.filter((student) => student.location === city)
    .map((student) => {
      const studentsGrades = newGrades.filter((grade) => grade.studentId === student.id);
      const grade = studentsGrades.length ? studentsGrades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
