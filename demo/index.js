"use strict";
console.log('day3');
const boys = {
    fname: 'yusif',
    age: 44,
    height: 170,
};
const student1 = {
    fname: 'alex',
    age: 55,
    height: 140,
};
function fToC(x) {
    if (typeof x === 'string') {
        return (parseInt(x) - 32) * 0.5;
    }
    else {
        return (x - 32) * 0.56;
    }
}
console.log(fToC(55));
const literToMil = (num) => {
    if (typeof num === 'string') {
        return (parseInt(num) * 1000);
    }
    else {
        return num * 1000;
    }
};
console.log(literToMil('4L'));
let sizes;
sizes = 's';
let pant = 'l';
let height = '';
let person = {
    height: height ? `${height}` : 90
};
let person2 = {
    height2: height !== null && height !== void 0 ? height : 90
};
console.log(person);
console.log(person2);
class GroupPll {
    constructor(total, ages, names) {
        this.printInfo = () => {
            return `our groub has a total of ${this.total} and their names are ${this.names} amd they are ${this.ages} `;
        };
        this.total = total,
            this.ages = ages,
            this.names = names;
    }
}
const team = new GroupPll(4, [22, 44, 23], [' alex ', ' adam ', ' jhon ']);
console.log(team.printInfo());
class GroupPll2 {
    constructor(total, ages, names) {
        this.printInfo = () => {
            return `our groub2 has a total of ${this.total} and their names are ${this.names} amd they are ${this.ages} `;
        };
        this.total = total,
            this.ages = ages,
            this.names = names;
    }
}
const group2 = new GroupPll(6, [22, 44, 23, 30, 33, 38], [' alex ', ' adam ', ' jhon ', ' sara', ' lura', ' alexa']);
console.log(group2.printInfo());
class GroupPll3 {
    constructor(total, ages, names) {
        this.total = total;
        this.ages = ages;
        this.names = names;
        this.printInfo = () => {
            return `our groub2 has a total of ${this.total} and their names are ${this.names} amd they are ${this.ages} `;
        };
    }
}
const groub3 = new GroupPll3(6, [22, 44, 23, 30, 33, 38], [' sam ', ' jo ', ' jhon ', ' sara', ' lura', ' alexa']);
console.log(groub3.printInfo());
