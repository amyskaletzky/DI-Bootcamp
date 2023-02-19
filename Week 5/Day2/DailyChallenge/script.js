const form = document.forms[0]
form.addEventListener('submit', getGif)

const input = document.getElementById('search-for')
const container = document.getElementById('container')

const deleteBtn = document.getElementById('delete-btn')
deleteBtn.addEventListener('click', deleteGif)

function getGif(e) {
    e.preventDefault()
    const searchFor = input.value
    const URL = `https://api.giphy.com/v1/gifs/search?q=${searchFor}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`

    const xhr = new XMLHttpRequest()
    xhr.open('GET', URL);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            // console.log(xhr.response.fixed_width.)
            const URLOfGif = xhr.response.data[0].images.downsized.url
            displayGif(URLOfGif)
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };
}


function displayGif(gifURL) {
    const img = document.createElement('img')
    img.src = gifURL

    container.appendChild(img)

}

function deleteGif() {
    const childrenAmount = container.childElementCount
    if (childrenAmount > 1) {
        container.lastElementChild.remove()
    }
}