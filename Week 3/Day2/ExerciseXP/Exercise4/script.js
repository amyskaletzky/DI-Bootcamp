'use strict'

const form = document.forms[0]
form.addEventListener('submit', findVolume)
const radius = document.getElementById('radius')
const volume = document.getElementById('volume')

function findVolume(evt) {
    evt.preventDefault()
    if (!radius.value) return
    volume.value = (4 / 3 * Math.PI * (radius.value ** 3)).toFixed(2)
}
