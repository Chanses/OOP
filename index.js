class Employee {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Developer extends Employee {
  constructor(name, surname) {
    super(name, surname);
  }
}

class Tester extends Employee {
  constructor(name, surname) {
    super(name, surname);
  }
}

class Project {}

const bob = new Employee("bob", "Ros");
