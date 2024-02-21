
let students = getStudentsLocal() || [];
console.log(students)

if (students.length > 0) {
    renderStudents(students)
}

const addNewStudent = () => {
    let newStudent = getStudentInfo();
    students.push(newStudent);
    setStudentsToLocal(students);
    renderStudents(students);
    document.getElementById('student-form').reset();
}

const resetStudents = () => {
    students = [];
    renderStudents(students);
    localStorage.removeItem('STUDENT_LOCAL')
}