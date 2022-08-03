import { Person } from './person';

const newPerson: Person = new Person('Tibi', 40);

console.log(newPerson.getName());
console.log(newPerson.getAge())



class User {
    public username: string;
    public static ip_address: string = '192.168.1.1';
    private email: string;
    private password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;

    }

}
const user1 = new User('Lacika', 'asd@asd.com', 'asdasd');

