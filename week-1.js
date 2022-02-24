class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = [ ]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentEmail) {
        if (studentEmail === this.students.includes(studentEmail)) {
            return this.students;
        } else {
            this.students.push(studentEmail)
            console.log(`Registering ${studentEmail} to the bootcamp Web Dev Fundamentals`);
            return this.students;
        }
    }
}
