// Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or
// large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants
// a < size drink > juice, containing < first ingredient >, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global
// scope.

// function makeJuice(bevSize) {
//     const div = document.createElement('div')

//     function addIngredients(ing1, ing2, ing3) {
//         let sentence = document.createTextNode(`The client wants a ${bevSize} juice, containing ${ing1}, ${ing2}, ${ing3}`)
//         div.appendChild(sentence)
//         document.body.appendChild(div)
//     }
//     addIngredients('strawberries', 'bananas', 'berries')
// }
// makeJuice('small')  




// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a < size drink > juice, containing < first ingredient >, <second ingredient>, <third ingredient>". Use the forEach method.

//     The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.



function makeJuice(bevSize) {
    const div = document.createElement('div')
    let ingredients = []

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3)
    }

    function displayJuice() {
        const firstPartOfSent = `The client wants a ${bevSize} juice, containing `
        const choosePunctuation = (arr, i) => (i === (arr.length - 1)) ? '.' : ', '
        let secondPartOfSent = ''

        ingredients.forEach((ing, i) => {
            secondPartOfSent += ing + choosePunctuation(ingredients, i)
        })

        let sentence = document.createTextNode(firstPartOfSent + secondPartOfSent)
        div.appendChild(sentence)
        document.body.appendChild(div)
    }
    addIngredients('strawberries', 'bananas', 'berries')
    addIngredients('dates', 'spirolina', 'orange juice')
    displayJuice()

}
makeJuice('big')
