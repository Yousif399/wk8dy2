var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var users = [
    {
        name: 'Brandt C',
        age: 99,
    },
    {
        name: 'Brendan Carlson',
        age: 99,
        company: 'Coding Temple'
    }
];
console.log(users);
var daysWeeks = function (x) {
    return (x);
};
console.log(daysWeeks('sat'));
// 3. Given the Person class below, create a getter for getting the full name of a person.
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.printInfo = function () {
            return "I Am ".concat(_this.firstName, " ").concat(_this.lastName);
        };
        this.firstName = firstName,
            this.lastName = lastName;
    }
    return Person;
}());
var person1 = new Person('adam', 'alex');
console.log(person1.printInfo());
// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.salary = salary;
        _this.printInfo = function () {
            return "my name is ".concat(_this.firstName, " ").concat(_this.lastName, " and i get paid ").concat(_this.salary, " every month");
        };
        return _this;
    }
    return Employee;
}(Person));
var employee1 = new Employee('joseph', 'moh', 900);
console.log(employee1.printInfo());
var employee = {
    name: 'Brandt C',
    // lName : 'brand',
    salary: 10000000,
    address: {
        street: 'Clutch Ave',
        city: 'Seattle',
        zipCode: 98101,
        // direction : 'north'
    }
};
console.log(employee);
