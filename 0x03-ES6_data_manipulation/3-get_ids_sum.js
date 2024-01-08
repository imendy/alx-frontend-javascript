function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    throw new Error('Invalid input');
  }

  const the_sums = students.reduce((accumulator, student) => accumulator + student.id, 0);

  return the_sums;
}

export default getStudentIdsSum;
