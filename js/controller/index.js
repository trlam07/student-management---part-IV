const getStudentInfo = () => {
    let code = document.getElementById('code').value;

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let math = document.getElementById('math').value;

    let physics = document.getElementById('physics').value;

    let chemistry = document.getElementById('chemistry').value;

    let newStudent = new Student (
        code,
        name, 
        email,
        math,
        physics,
        chemistry,
    )

    return newStudent
}

const renderStudents = (students) => {
    let contentHTML = '';
    for (let i = 0; i < students.length; i++) {
        let currentStudent = students[i];
        let contentTr = `
        <tr>
            <td>${currentStudent.code}</td>
            <td>${currentStudent.name}</td>
            <td>${currentStudent.email}</td>
            <td>${(Number(currentStudent.math) + Number(currentStudent.physics) + Number(currentStudent.chemistry)) / 3}</td>
        </tr>
        `;
        contentHTML += contentTr;
    }

    document.getElementById('student-table').innerHTML = contentHTML;
}

const setStudentsToLocal = (students) => {
    let jsonStudent = JSON.stringify(students);
    localStorage.setItem('STUDENT_LOCAL', jsonStudent)
}

const getStudentsLocal = () => {
    let jsonStudent = localStorage.getItem('STUDENT_LOCAL');
    return JSON.parse(jsonStudent)
}