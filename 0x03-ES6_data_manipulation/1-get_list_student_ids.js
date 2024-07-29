export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  //  creates a new array populated with the results of calling a
  // provided function on every element in the calling array.
  return arr.map((item) => item.id);
}
