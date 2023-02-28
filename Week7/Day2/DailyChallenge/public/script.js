const sendData = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const message = e.target.message.value

    fetch('/formData', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, message })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}