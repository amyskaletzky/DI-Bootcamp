'use strict'

// Exercise 1 : Scope
// Instructions:
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()    // a = 3, because 5 > 1 so a = 3, and a was defined outside the if statement
// #1.2 What will happen if the variable is declared with const instead of let ? a = 5, because the value of a variable that is declared with const cannot be redefined

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // a = 0, because funcTwo() has not been called yet and therefore a still = 0
funcTwo()  // a = 5
funcThree() // a = 5, because funcTwo() has already been called so a = 5 now
// #2.2 What will happen if the variable is declared 
// with const instead of let ? 

// first funcThree() -> a = 0 still, as it's value isn't and cannot be reassigned
// funcTwo() -> issue, as const value cannot be reassigned
// second funcThree() -> a = 0 still, as it's value cannot be reassigned because it was declared with const instead of let or var



//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // will assign the value 'hello' to a, i think?
funcFive() // will alert user 'inside the funcFive function hello'

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()           // i think a = 'test', because let a = 1 is a global scope and let a = 'test' is a block scope, so it's possible i think
// #4.2 What will happen if the variable is declared 
// with const instead of let ? ->       i think it will still work the same way, because both let and const are both block scoped.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console -> i think that in the first alert, a = 5 because true === true and it's within that if statement
//                                    -> i think that in the second alert, a = 2, because it isn't inside the if, so it takes the value of the global variable a which is 2

// #5.2 What will happen if the variable is declared
// with const instead of let ?