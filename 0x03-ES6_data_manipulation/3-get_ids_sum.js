export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    students.reduce((sum, student) => sum += student.id, 0);
  }
}
