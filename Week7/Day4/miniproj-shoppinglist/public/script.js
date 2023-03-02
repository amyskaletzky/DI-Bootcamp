const sendFormData = (e) => {
    e.preventDefault()
    const item = e.target.item.value
    const amount = e.target.amount.value
    console.log(item, amount)

    fetch('/shoppingList/shop', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ item, amount })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}


(async () => {
    const res = await fetch('/shoppingList')
    const data = await res.json()
    data.map(item => {
        console.log(item)
        const p = document.createElement('p')
        const text = document.createTextNode(`${item['item']}: ${item['amount']}`)
        p.appendChild(text)
        const container = document.getElementById('container')
        container.appendChild(p)
    })
})()