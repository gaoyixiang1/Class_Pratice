import Person from './person'
export default class Teacher extends Person {
    constructor(id, name, age, classes) {
        super(id, name, age);
        this.klasses = classes || [];
    }
    introduce() {
        if (this.klasses.length) {
            let class_num = this.klasses.map(x => x.number).join(", ");
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${class_num}.`
        } else {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`
        }
    }
    isTeaching(student) {
        if (this.klasses === student.klasses) {
            return true;
        } else {
            return false;
        }
    }
}