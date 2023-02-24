// Exercise 6 : Challenges
// Evaluate these(ie True or False)

// [2] === [2] -> false
// { } === {} -> false 
// because you're comparing the addresses and they are different, regardless of whether the values are equal.


// What is, for each object below, the value of the property number and why ?

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number) // value of number: 4, because it points to the same address as object1 so when it's value was changed, so was object2's value
console.log(object3.number) // value of number: 4, because it points to the same address as object2 which points to the address of object1, so when object1's value was changed so was object2's and object3's.
console.log(object4.number) // value of number: 5


// Create a class Animal with the attributes name, type and color.The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
    constructor(name, type, colour) {
        this.name = name
        this.type = type
        this.colour = colour
    }
}


// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound().This method takes a parameter: the sound the animal makes, and returns the details of the animal(name, type and color) as well as the sound it makes.
class Mammal extends Animal {
    constructor(name, type, colour) {
        super(name, type, colour)
    }

    sound(soundChoice) {
        this.sound = soundChoice
        return `${this.sound} I'm a ${this.type}, named ${this.name} and I'm ${this.colour}`
    }
}


// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
const farmerCow = new Mammal('Lily', 'cow', 'brown and white')
console.log(farmerCow.sound('Moooo'))
