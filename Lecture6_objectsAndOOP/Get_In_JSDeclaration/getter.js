class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Getter with computed value
  get initials() {
    return `${this.firstName[0]}${this.lastName[0]}`.toUpperCase();
  }
}

// Usage
const person = new Person('John', 'Doe');
console.log(person.fullName); // "John Doe" - no parentheses!

console.log(person.initials); // "JD"