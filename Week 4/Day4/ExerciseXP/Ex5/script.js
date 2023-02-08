// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
    constructor(name) {
        this.name = name;
    }
};
// Analyze the options below.Which constructor will successfully extend the Dog class?
// 1
class Labrador extends Dog {
    constructor(name, size) {
        this.size = size;
    }
};


// 2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};


// 3
class Labrador extends Dog {
    constructor(size) {
        super(name);
        this.size = size;
    }
};


// 4
class Labrador extends Dog {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
};

//i think it's number 2 because super(name) is needed in order to get the name from class Dog
// also size is needed in the constructor alongside name to create that new property
// and this.size = size is also neccessary for it to be created