// Exercise 2: Display Student Info
// Instructions
function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'