let form = document.forms[0]
form.addEventListener('submit', getRate)
const fromCurr = document.getElementById('from-curr')
const toCurr = document.getElementById('to-curr')

async function getCurrencyCodes() {
    try {
        // fetching supported currencies
        const res = await fetch('https://v6.exchangerate-api.com/v6/6c655a9621e41018c99875a7/codes')
        const data = await res.json()
        const supportedCodesArr = data.supported_codes


        // using forEach to get each of the currencies to create and append options for both 'select' elements
        supportedCodesArr.forEach(code => {
            const option = document.createElement('option')
            const text = document.createTextNode(code[0])

            option.appendChild(text)
            const optionClone = option.cloneNode(true)      // cloning so I can use the same data and append it to the second select element

            fromCurr.appendChild(option)
            toCurr.appendChild(optionClone)
        })
    } catch (err) {
        console.log(err)
    }
}

getCurrencyCodes()

async function getRate(e) {
    try {
        e.preventDefault()
        const originalCurr = fromCurr.value
        const convertToCurr = toCurr.value
        const res = await fetch(`https://v6.exchangerate-api.com/v6/6c655a9621e41018c99875a7/pair/${originalCurr}/${convertToCurr}`)
        const data = await res.json()
        const conversionRate = data.conversion_rate
        const amountToBeConverted = document.getElementById('amount').value

        // if (typeof amountToBeConverted !== 'number') {                   // how do I check if this is a number or string?
        //     throw new Error('amount entered is not a number')
        // }

        const result = amountToBeConverted * conversionRate
        displayResult(result)

    } catch (err) {
        console.log(err)
    }
}

function displayResult(res) {
    const resultContainer = document.getElementById('result')

    // checking if the resultContainer already has a child, and if so, I want it to remove it
    const child = resultContainer.lastChild
    if (child) {
        child.remove()
    }
    const text = document.createTextNode(res)

    // appending the result to the resultContainer
    resultContainer.appendChild(text)
}