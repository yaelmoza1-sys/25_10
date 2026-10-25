class Employee {
    #salary

    constructor(salary) {
        this.#salary = salary
    }

    getSalary() {
        return this.#salary
    }

    work() {
        console.log("Employee is working")
    }
}

class Manager extends Employee {
    constructor(salary) {
        super(salary)
    }

    work() {
        console.log("Manager is managing")
    }
}

const emp = new Employee(4000)
console.log(emp.getSalary())
emp.work()

const mgr = new Manager(5000)
console.log(mgr.getSalary())
mgr.work()