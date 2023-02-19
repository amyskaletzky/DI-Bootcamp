// Exercise 1 & 2


// This URL is for Exercise 1
// const URL = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'


// This URL is for Exercise 2
const URL = 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2'




const xhr = new XMLHttpRequest()
xhr.open('GET', URL);
xhr.responseType = 'json';
xhr.send();

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log('object: ', xhr.response);
    }
};

xhr.onerror = function () {
    console.log("Request failed");
};

