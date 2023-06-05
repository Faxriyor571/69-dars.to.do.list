const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
const messageCreate = document.querySelector('#message-create')
// const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')

//check

let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

//todos localstorage
function settodos() {
    localStorage.setItem('item', JSON.stringify(todos))
}

//show todos

function showdotos() {
    const todos = JSON.parse(localStorage.getItem('list'))
}


// show error
function showMessage(where, message) {
    document.querySelector(`${where}`).textContent = message

    setTimeout(() => {
        document.querySelector(`${where}`).textContent = ' '
    }, 2000);
}

// get todos

formCreate.addEventListener('submit', (e)=> {
    e.preventDefault() 
    const todoText = formCreate['input-create'].value.trim()
    formCreate.reset()
    if (todoText.length) {
        todos.push({text: todoText, time: '22:03, 05.06.2023', completed: false })
        console.log(todos);
        settodos()
    } else {
        showMessage('#message-create', 'Please, enter some word...')
    }

    
})