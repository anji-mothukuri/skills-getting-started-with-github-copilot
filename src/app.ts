// TypeScript version
try {
  const students: { grade: number }[] = [];
  const topStudents = students.filter(student => student.grade > 80);
  console.log(topStudents);
} catch (error) {
  console.error("Error filtering students:", error);
}
