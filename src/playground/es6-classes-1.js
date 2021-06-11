//  class Person{
//      constructor(name){
//          this.name = name || 'No name';
//      }
//  }

//use function defaults
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return 'Hi, I am ' + this.name + ' !';
    }

    getDescription() {

        return `${this.name} is ${this.age} years old !`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor) {

            description += ` major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
        console.log(this);
    }

    getGreetings() {
        let greetings = super.getGreetings();

        if (this.homeLocation) {
            greetings += ` I am visiting from ${this.homeLocation}.`;
        }
        return greetings;
    }
}



// const me = new Student('gagana student', 26);
// console.log(me);
// console.log(me.hasMajor());
// console.log(me.getDescription());

// console.log(me);

// const me2 = new Person();
// console.log(me2);

const traveler = new Traveler('gagana', 26);
const traveler1 = new Traveler(undefined, undefined, undefined);

console.log(traveler1.getGreetings());