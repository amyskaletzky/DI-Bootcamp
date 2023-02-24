
// 28. Use ** async await **, and ** the fetch API ** to fetch a fact on cats and display it.Use this third party API: `https://catfact.ninja/fact`
// 1. In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM
// 2. In the JS file, create 2 functions: one to fetch data from API, the other one to display it on the page using the DOM
// 3. Make sure to use try and catch

const btn = document.querySelector('button')
btn.addEventListener('click', getCatFacts)

async function getCatFacts() {
    try {
        const res = await fetch(`https://catfact.ninja/fact`);
        const res2 = await res.json()
        console.log(res2.fact)
        displayCatFacts(res2.fact)
    } catch (err) {
        console.log(err)
    }

}

function displayCatFacts(fact) {
    const container = document.getElementById('container')
    const div = document.createElement('div')
    const p = document.createElement('p')
    const randomFact = document.createTextNode(fact)
    p.appendChild(randomFact)
    div.appendChild(p)
    container.appendChild(div)
}

