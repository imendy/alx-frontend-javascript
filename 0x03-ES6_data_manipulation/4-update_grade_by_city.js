function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((student) => student.location === city)
    .map((student) => {
      const student_grade = newGrades.find((i) => i.studentId === student.id);
      return { ...student, grade: (student_grade && student_grade.grade) || 'N/A' };
    });
}

export default updateStudentGradeByCity;
