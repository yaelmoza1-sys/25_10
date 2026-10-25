class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hello, I'm ${this.name}`)
    }
}
class Student extends Person {
    constructor(name, school) {
        super(name)
        this.school = school
    }

    study() {
        console.log(`${this.name} is studying at ${this.school}`)
    }
}

const alice = new Student("Alice", "Oxford")
alice.greet()
alice.study()