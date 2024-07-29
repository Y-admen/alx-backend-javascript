export default function getStudentIdsSum(stusents) {
  return stusents.reduce((sum, student) => sum + student.id, 0);
}
