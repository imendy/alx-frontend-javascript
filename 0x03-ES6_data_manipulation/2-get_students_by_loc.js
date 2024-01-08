function getStudentsByLocation(students, city) {
  const the_newArray = students.filter((student) => student.location === city);

  return the_newArray;
}

export default getStudentsByLocation;
