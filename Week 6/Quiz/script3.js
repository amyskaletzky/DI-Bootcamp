// 29. Use **async await**, and **the fetch API** to POST some data.
// * Retrieve the data from a form(you can use new FormData), and send this data to this API: `https://jsonplaceholder.typicode.com/posts`.
// * The server will send you back some dummy data that you will display on the DOM.
// * Use the documentation of the API: https://jsonplaceholder.typicode.com/guide/
// * Use the fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
// * Use the new FormData documentation with Object.fromEntries() : https://gomakethings.com/the-object.fromentries-method-in-vanilla-js/

const form = document.getElementById('form');
form.addEventListener('submit', getFormData)
const formData = new FormData(form);



async function getFormData() {
    // const username = document.getElementById('user-name')
    // const surname = document.getElementById('surname')
    // console.log(username, surname)
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await res.json();
        console.log(data)

    } catch (err) {
        console.log(err)
    }

}


// I'm not sure how to do this one, I keep getting an error when I use method='post' in the index3.html
// yet without it, it seems to be doing GET instead of POST