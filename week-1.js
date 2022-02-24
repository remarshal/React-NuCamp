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
    registerStudent(student) {
        if (this.students.includes(student)) {
            console.log(`The student email ${student.email} is already registered to the bootcamp ${this.name}.`);
            return this.students;
        } else {
            this.students.push(student)
            console.log(`Registering ${student.email} to the bootcamp ${this.name}.`);
            return this.students;
        }
    }
}

const webDevFundamentals = new Bootcamp("Web Development Fundamentals", "Beginner");
const fullStack = new Bootcamp("Full Stack Web and Mobile Development", "Advanced");
const Neo = new Student("Neo", "neo@matrix.org", "Seattle");
const Morpheus = new Student("Morpheus", "morpheus@matrix.org", "Tacoma");
const Trinity = new Student("Trinity", "trinity@matrix.org", "Bellingham");

// Developer console testing
// webDevFundamentals.registerStudent(Neo);
// webDevFundamentals;