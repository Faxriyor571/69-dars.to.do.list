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

let todos = JSON.parse(localStorage.getItem('list')) 
? JSON.parse(localStorage.getItem('list')) 
: [] 
console.log(todos)
//todos localstorage
function settodos() {
    localStorage.setItem('item', JSON.stringify(todos))
}

//show todos

function showdotos() {
    const todos = JSON.parse(localStorage.getItem('list'))
            
        todos.forEach((item, i)=> {
            listGroupTodo.innerHTML += `
                <li class="list-group-item d-flex justify-content-between">
                        ${item.text}
                        <div class="todo-icons">
                            <span class="opacity-50 me-2">05.06.2023</span>
                            <img src="/img/edit.svg" alt="edit icon" width="25" height="25">
                            <img src="/img/delete.svg" alt="edit icon" width="25" height="25">
                    </div>
                </li>
                `
    });
}


// show error
function showMessage(where, message) {
    document.querySelector(`${where}`).textContent = message

    setTimeout(() => {
        document.querySelector(`${where}`).textContent = ' '
    }, 2000);
}

/* <li class="list-group-item d-flex justify-content-between"> hello
          <div class="todo-icons">
            <span class="opacity-50 me-2">05.06.2023</span>
            <img src="/img/edit.svg" alt="edit icon" width="25" height="25">
            <img src="/img/delete.svg" alt="edit icon" width="25" height="25">
          </div>
        </li>
*/

// get todos

formCreate.addEventListener('submit', (e)=> {
    e.preventDefault() 
    const todoText = formCreate['input-create'].value.trim()
    formCreate.reset()
    if (todoText.length) {
        todos.push({text: todoText, time: '22:03, 05.06.2023', completed: false })
        settodos()
    } else {
        showMessage('#message-create', 'Please, enter some word...')
    }
})