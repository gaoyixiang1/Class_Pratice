import Person from './person'
export default class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        if (this.klass) {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.klass.number}.`
        } else {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`
        }
    }
    introduceWith(student) {
        if (this.klass == student.klass) {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${student.name}.`
        } else {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I don't teach ${student.name}.`
        }
    }
}

