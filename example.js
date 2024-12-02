//class example with javascript
class Person {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  greeting() {
    //void
    console.log(
      `hi, my name is ${this.name}  my age is ${this.age}` //my salary is ${this.salary}`
    );
  }

  personSalary() {
    console.log(`my salary is ${this.salary}`);
  }
}

const person1 = new Person("Joe", 25, 40000);
const person2 = new Person("Olga", 26, 5000000);
const person3 = new Person("Leonora", 27, 4000000);

person1.greeting();
person2.greeting();
person3.greeting();
person1.personSalary();
person2.personSalary();
person3.personSalary();

console.log(person1.salary);
