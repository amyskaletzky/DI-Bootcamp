
# maybe use JS classes somehow?

# filter 
use .toLowerCase() + .includes()
call renderCards
add class hide to all divs other than the one that matches


# CSS 
- navbar 
    -flex
    -direction row
-container
    -grid
        -column 3
        -row auto
-inside each card 
    -flex -column
    -align-items: left
    
# JS
- form 
    -eventlistener 'input' ->callback fun searchRobot

-searchRobot

-renderRobot
# use .forEach() to generate all of cards 

let strHTML = 
`<div class='card'>
    <img src='${robotName}.jpg'>
    <p class='robot-name'>${robotName}</h1>
    <p class='email'>${name}</h1>
</div>`

appendChild 

# class Robot
- attribute 
    -img.
    -name.
    -email.
-method 
    - dropdown -> shows extra details

# class Game
-method 
    -filter (static method JS)  
    -self invoking function -> Display/render robots
    - createrobot -> create instances from the robot class and append on page

    - or modal that pops up 