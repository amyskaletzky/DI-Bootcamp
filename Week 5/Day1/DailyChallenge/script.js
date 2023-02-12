const form = document.forms.username
form.addEventListener('submit', turnJSONString)

function turnJSONString(e) {
    e.preventDefault()
    const obj = { name: e.target.elements[0].value, lastname: e.target.elements[1].value }
    const jsonStr = JSON.stringify(obj)
    const container = document.querySelector('#container')
    const p = document.createElement('p')
    const text = document.createTextNode(jsonStr)
    p.appendChild(text)
    container.appendChild(p)
}