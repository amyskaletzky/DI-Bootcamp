// array of objects (robots)
const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

const container = document.querySelector('.container')

class Robot {
    constructor(name, email, image, id, username) {
        this.name = name
        this.email = email
        this.image = image
        this.id = id
        this.username = username
    }

    modal() {
        // const { name, email, image, id, username } = robot
        console.log("test")

        // creating modal
        // const modal = document.createElement('div')
        // modal.classList.add('modal')

        // // creating card content (img, name, email + text nodes)
        // const robotImg = document.createElement('img')
        // robotImg.src = image
        // const pName = document.createElement('p')
        // const pNameContent = document.createTextNode(name)
        // const pEmail = document.createElement('p')
        // const pEmailContent = document.createTextNode(email)

        // // appending text nodes to 'p' elements created
        // pName.appendChild(pNameContent)
        // pEmail.appendChild(pEmailContent)

        // // appending content to card, and card to container
        // card.append(robotImg, pName, pEmail)
        // container.appendChild(card)

    }
}


class Game {
    constructor() {
        this.createRobot()
    }

    filter(evt) {
        evt.preventDefault()
        const inputValue = evt.target.value.toLowerCase()
        console.log(inputValue)
        const allRobots = document.querySelectorAll('.card')

        allRobots.forEach(div => {
            const robotName = div.children[1].textContent
            if (!robotName.toLowerCase().includes(inputValue)) {
                div.classList.add('hide')
            } else {
                div.classList.remove('hide')
            }
        })

    }

    createRobot() {
        robots.forEach(robot => {
            const { name, email, image, id, username } = robot
            const newRobot = new Robot(name, email, image, id, username)
            this.renderRobot(newRobot)
        })

    }

    renderRobot(robot) {
        const { name, email, image, id, username } = robot
        // creating card
        const card = document.createElement('div')
        card.addEventListener("click", robot.modal)
        card.classList.add('card')

        // creating card content (img, name, email + text nodes)
        const robotImg = document.createElement('img')
        robotImg.src = image
        const pName = document.createElement('p')
        const pNameContent = document.createTextNode(name)
        const pEmail = document.createElement('p')
        const pEmailContent = document.createTextNode(email)

        // appending text nodes to 'p' elements created
        pName.appendChild(pNameContent)
        pEmail.appendChild(pEmailContent)

        // appending content to card, and card to container
        card.append(robotImg, pName, pEmail)
        container.appendChild(card)
    }
}

const newGame = new Game();


const input = document.getElementById('filter-search')
// input.addEventListener('input', Game.filter)
input.addEventListener('input', newGame.filter)


