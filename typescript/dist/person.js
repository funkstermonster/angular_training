"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
let url = 'wauwau';
let randomNum = 30;
let bool = false;
let numberArray = [1, 2, 54];
let nmberArrayV2 = [1, 2, 54];
function addNumbers(num1, num2) {
    return num1 + num2;
}
addNumbers(15, 45);
class Animal {
    constructor(weight) {
        this.weight = weight;
    }
}
class Tiger extends Animal {
    constructor() {
        super(56);
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.Person = Person;
