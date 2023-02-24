'use strict'
// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the < div id = "animate" > to the right side of the < div id = "container" >, when the button is clicked on.
// The < div id = "animate" > should move 1px to the right every milisecond, until it reaches the end of the < div id = "container" >.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint: check out the demonstration in the Course Noted named JS Functions

const div = document.getElementById('animate')
let pushLeft = 1

function myMove() {
    let idInterval = setInterval(function () {
        console.log(pushLeft);
        pushLeft++;
        console.log(pushLeft);
        div.style.left = pushLeft + 'px';
        if (pushLeft >= 350) {          //350 because the container has width=400px and the animate div width=50px
            clearInterval(idInterval);
        }
    }, 1);
}

