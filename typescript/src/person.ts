import { PersonInterface } from "./person.interface";

let url: string = 'wauwau';
let randomNum: number = 30;
let bool: boolean = false;


let numberArray: number[] = [1,2,54];
let nmberArrayV2: Array<number> = [1, 2, 54];


function addNumbers(num1: number, num2: number): number {
    return num1 + num2;

}

addNumbers(15, 45);

abstract class Animal {
    weight: number;

    constructor(weight: number) {
        this.weight = weight;
    }
}

class Tiger extends Animal {
    
    constructor() {
        super(56);
    }
}

export class Person implements PersonInterface {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}