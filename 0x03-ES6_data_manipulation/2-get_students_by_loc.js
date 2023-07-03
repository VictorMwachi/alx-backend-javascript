function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    students.filter((student) => student.location === city);
  } else {
    return [];
  }
}
