function getListStudentIds(arr) {
  const the_newArray = [];

  if (!Array.isArray(arr)) {
    return the_newArray;
  }
  arr.map((student) => the_newArray.push(student.id));

  return the_newArray;
}

export default getListStudentIds;
