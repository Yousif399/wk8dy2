// 1. Given the data below, define a type alias for representing users.
type User = {
    name: string;
    age: number;
    company ?: string;
  }
  
let users: User[]= [  
    {
        name:'Brandt C',
        age:99,
    },  
    {
        name:'Brendan Carlson',
        age:99,
        company:'Coding Temple'
        
    }
];
console.log(users)
// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type Days = 'sat'|'sun'|'mon'| 'tue'| 'wed'|'thur'|'frid'
const daysWeeks = (x:Days):string =>{
    return(x);
}
console.log(daysWeeks('sat'))
// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {
            this.firstName = firstName,
            this.lastName = lastName
        }
    printInfo = ():string =>{
        return `I Am ${this.firstName} ${this.lastName}`
    }
}
let person1 = new Person('adam','alex')
console.log(person1.printInfo())
// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person{
    constructor(public firstName:string, public lastName:string, private salary:number){
        super(firstName,lastName)
    }
    printInfo = (): string =>{
        return `my name is ${this.firstName} ${this.lastName} and i get paid ${this.salary} every month`
    }
}
let employee1 = new Employee('joseph','moh',900) 
console.log(employee1.printInfo())

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
// let employee:employee = {
//     name:'Brandt C',
//     salary:10_000_000,
//     address:{
//         street:'Clutch Ave',
//         city:'Seattle',
//         zipCode: 98101
//     }
// };
interface employee{
    name: string,
    // lName: string
    salary:number,
    address? : Adress
}
interface Adress{
    street : string,
    city: string,
    zipCode: number
    // direction : string
}
let employee:employee = {
    name:'Brandt C',
    // lName : 'brand',
    salary:10_000_000,
    address:{
        street:'Clutch Ave',
        city:'Seattle',
        zipCode: 98101,
        // direction : 'north'
    }
};
console.log(employee)