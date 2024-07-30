export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradeMap = newGrades.reduce((map, grade) => (
    { ...map, [grade.studentId]: grade.grade }
  ), {});

  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: gradeMap[student.id] || 'N/A',
    }));
}
