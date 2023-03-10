const btn = document.querySelector('button')
btn.addEventListener('click', retrieveData)
const container = document.getElementById('container')


async function retrieveData() {
    refreshData()
    try {
        const id = getRandomInt(1, 83)
        const res1 = await fetch(`https://www.swapi.tech/api/people/${id}`)
        if (res1.status !== 200) {
            throw new Error('Couldn\'t find character')
        }
        const data = await res1.json()

        if (data.message === 'not found') {
            throw new Error('Couldn\'t find character')
        }

        const height = data.result.properties.height
        const name = data.result.properties.name
        const gender = data.result.properties.gender
        const birthYear = data.result.properties.birth_year

        const homeworldURL = data.result.properties.homeworld
        const planet = await retrieveWorld(homeworldURL)

        displayData([name, height, gender, birthYear, planet])

    } catch (err) {
        console.log(err)
    }

}

async function retrieveWorld(worldURL) {
    // using the api of the world to find the name of the planet
    try {
        const res = await fetch(worldURL)
        if (res.status !== 200) {
            throw new Error('Couldn\'t find character')
        }
        const res2 = await res.json()
        const planet = res2.result.properties.name
        return planet

    } catch (err) {
        console.log(err)
    }

}


function displayData(arrdetails) {
    // removing the loading gif
    const divLoading = document.querySelector('div')
    divLoading.style.display = 'none'

    // creating an array for the keys
    const keyArray = ['height', 'gender', 'birthYear', 'planet']

    // looping instead of repetitive 'createElement' 'p' 5 times + adding classlist so name has a larger font
    for (let i = 0; i < arrdetails.length; i++) {
        const p = document.createElement('p')
        if (i === 0) {
            p.classList.add('title')
            const contentName = document.createTextNode(`${arrdetails[i]}`)
            p.appendChild(contentName)
        } else {
            const content = document.createTextNode(`${keyArray[i - 1]}: ${arrdetails[i]}`)
            p.appendChild(content)

        }
        container.append(p)

    }

}

function refreshData() {
    // to remove previous data
    let lastChild = container.lastElementChild
    while (lastChild) {
        container.removeChild(lastChild)
        lastChild = container.lastElementChild
    }

    // loading gif
    const divLoading = document.createElement('div')
    divLoading.classList.add('fa-3x')
    const gifLoad = document.createElement('i')
    gifLoad.classList.add('fa-solid', 'fa-spinner', 'fa-spin-pulse')
    divLoading.appendChild(gifLoad)
    container.appendChild(divLoading)

}

// random integer generator (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}