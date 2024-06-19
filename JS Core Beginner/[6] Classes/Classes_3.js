"use strict";

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const annualSalary = super.calculateAnnualSalary();
        const bonus = 0.1 * annualSalary;
        return annualSalary + bonus;
    }
}

const manager1 = new Manager("Alice", 50000, "Sales");
const manager2 = new Manager("Bob", 60000, "Marketing");

console.log(`${manager1.name}'s annual salary: $${manager1.calculateAnnualSalary()}`);
console.log(`${manager2.name}'s annual salary: $${manager2.calculateAnnualSalary()}`);
