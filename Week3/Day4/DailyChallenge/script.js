'use strict'


const tasks = [];
const submit = document.querySelector('#submit')
submit.addEventListener('click', addTask)
const input = document.getElementById('txt')
const div = document.querySelector('.listTasks')

function addTask(evt) {
    evt.preventDefault()
    if (input.value !== '') {
        tasks.push(input.value)
        div.innerHTML += `<div class="tasks">
            <button>x</button>
			<input type="checkbox">
			${tasks[tasks.length - 1]}
            </div>`
        input.value = ''

    }
}