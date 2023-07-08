console.log('day3')


// testing

// Type Aliases: Creating our own Type
const boys: {
    fname: String,
    age: Number,
    height: Number
} = {
    fname: 'yusif',
    age: 44,
    height: 170,
}

type Student = {
    fname: String,
    age: Number,
    height: Number
};
const student1: Student = {
    fname: 'alex',
    age: 55,
    height: 140,
}

// Union Types: Can allow a variable to be one of many types (number | string)
function fToC(x: number | string): number {
    if (typeof x === 'string') {
        return (parseInt(x) - 32) * 0.5
    } else {
        return (x - 32) * 0.56

    }

}
console.log(fToC(55))
// TypeScript Arrow Function
const literToMil = (num: number | string): number => {
    if (typeof num === 'string') {
        return (parseInt(num) * 1000)
    } else {
        return num * 1000
    }
}
console.log(literToMil('4L'))


// Literal Types (exact)

let sizes: ('s' | 'm' | 'l' | 'xl');
sizes = 's'

type Sizes = ('s' | 'm' | 'l' | 'xl');
let pant: Sizes = 'l'


// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects

let height: number | null | string = ''

let person = {
    height: height ? `${height}` : 90
}

let person2 = {
    height2: height ?? 90
}
console.log(person)
console.log(person2)

// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.

// const myInput = document.getElementById('input') as HTMLInputElement;
// myInput.value;

// The "unknown" type: We have to narrow down to a specific type before performing any operations
// It is preferred to use "unknown" over "any" bc it forces us to do some type checking
// const office = (info:unknown) => {
//     return info
// }

// Creating Classes
class GroupPll {
    total: number
    ages: Array<number>
    names: Array<string>
    constructor(total: number, ages: Array<number>, names: Array<string>) {
        this.total = total,
            this.ages = ages,
            this.names = names
    }
    printInfo = (): string => {
        return `our groub has a total of ${this.total} and their names are ${this.names} amd they are ${this.ages} `
    }
}

const team = new GroupPll(4, [22, 44, 23], [' alex ', ' adam ', ' jhon '])
console.log(team.printInfo())

// typeof vs instanceof
// console.log(typeof student1)
// console.log(typeof team )
// console.log(team instanceof GroupPll)
// console.log(student1 instanceof Student)


// private properties and accessing them
class GroupPll2 {
    total: number
    private ages: Array<number>
    names: Array<string>
    constructor(total: number, ages: Array<number>, names: Array<string>) {
        this.total = total,
            this.ages = ages,
            this.names = names
    }
    printInfo = (): string => {
        return `our groub1 has a total of ${this.total} and their names are ${this.names} amd they are ${this.ages} `
    }
}
const group2 = new GroupPll2(6, [22, 44, 23, 30, 33, 38], [' alex ', ' adam ', ' jhon ', ' sara', ' lura', ' alexa'])
console.log(group2.printInfo())
// group2.ages = 69


// Building a class with parameter properties: Preferred way
class GroupPll3 {
    constructor(public total: number, public ages: Array<number>, public names: Array<string>) { }
    printInfo = (): string => {
        return `our groub2 has a total of ${this.total} and their names are ${this.names} amd they are ${this.ages} `
    }
}
const groub3 = new GroupPll3(6, [22, 44, 23, 30, 33, 38], [' sam ', ' jo ', ' jhon ', ' sara', ' lura', ' alexa'])
console.log(groub3.printInfo())

class GroupPll4 extends GroupPll3{
    constructor(public total: number, public ages: Array<number>, public names: Array<string>, public location : string) {
        super(total, ages, names)
    }
    printInfo = ():  string =>{
        return `our groub3 has a total of ${this.total} and their names are ${this.names} amd they are ${this.ages} and it is in ${this.location} `
    }
}
const groub4 = new GroupPll4(6, [22, 44, 23, 30, 33, 38], [' sam ', ' jo ', ' jhon ', ' sara', ' lura', ' alexa'],'london LOOL')
console.log(groub4.printInfo())
// Interfaces vs Types 
/* They both establish a shape of an object and can be used interchangeably BUT
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/

// interface MUST be an object

 interface Studeent {
    name : string;
    age : number;
    info():string;
 }

class ClutchStudent implements Studeent{
    name: string;
    age: number;
    aLvl: string;
    constructor(name: string,age: number,aLvl: string){
        this.name = name;
        this.age= age;
        this.aLvl = aLvl
    }
    info(): string {
        return `${this.name} is ${this.age} and he is ${this.aLvl}`
    }
}
let student = new ClutchStudent('jo',26,'great')
console.log(student.info())

interface Kid {
    name: string;
    age: number;
    weight: number;
    info(): string;
}

const kid: Kid ={
   name: 'bob',
   age: 2,
   weight: 35,
   info() {
    return `${this.name} is great kid he is only ${this.age}`
   }
}
console.log(kid.info())