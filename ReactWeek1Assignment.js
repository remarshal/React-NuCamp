class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(newStudent) {
        // check if the new student's email already existings in current students
        const duplicateStudentsFound = this.students.filter((existingStudent) => {
            if (existingStudent.email === newStudent.email) {
                return true
            }
        })
        // if student not registered, then add to array of students
        if (duplicateStudentsFound.length === 0) {
            this.students.push(newStudent)
            console.log(`Thank you for registering ${newStudent.email} to the bootcamp ${this.name}.`)
        // else show message that studen tis already registered 
        } else {
            console.log(`The students email ${newStudent.email} is already registered to the bootcamp ${this.name}.`)
        }
    }
}

// new students
const Brandon = new Student("Brandon", "brandon@gmail.com", "Rhode Island");
const Marshal = new Student("Marshal", "marshal@gmail.com", "Connecticut");
const Paul = new Student("Paul", "paul@gmail.com", "Massachusetts");

// new bootcamps
const React = new Bootcamp("React", "Advance");
const Boostrap = new Bootcamp("Bootstrap", "Bigginner");

// console testing
React.registerStudent(Brandon);
React.registerStudent(Brandon);