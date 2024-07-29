import getListStudents from './0-get_list_students';

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((item) => item.id);
}
console.log(getListStudentIds('hello'));
console.log(getListStudentIds(getListStudents()));
