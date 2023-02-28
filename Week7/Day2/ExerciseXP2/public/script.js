const getData = () => {
    fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('container').innerHTML = JSON.stringify(data)
        })
        .catch(err => {
            console.log(err);
        })
}
getData();