let students = [];
let currentId = 1;

module.exports = {
    getStudents: () => students,
    addStudent: (student) => {
        student.id = currentId++;
        students.push(student);
    },
    updateStudent: (id, updatedData) => {
        const studentIndex = students.findIndex(u => u.id === id);
        if (studentIndex !== -1) {
            students[studentIndex] = { ...students[studentIndex], ...updatedData};
            return students[studentIndex];
        }
        return null;
    },
    deleteStudent: (id) => {
        const studentIndex = students.findIndex(u => u.id === id);
        if (studentIndex !== -1) {
            students.splice(studentIndex, 1);
            return true;
        }
        return false;
    },
    getStudentById: (id) => students.find(u => u.id === id)
};