const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')
let editItemId

//check
let todos = JSON.parse(localStorage.getItem('list')) 
? JSON.parse(localStorage.getItem('list')) 
: [] 
if(todos.length) showTodos()
// setTodos to localstorage
function setTodos() {
    localStorage.setItem('list', JSON.stringify(todos))
}
// time 
function getTime() {
    const now = new Date()
    const date = now.getDate() 
     < 10 ? '0'+ (now.getDate()) : now.getDate()
    const month = now.getMonth()
     < 10 ? '0' + (now.getMonth()+ 1) : now.getMonth()
    const year = now.getFullYear()
    const hour = now.getHours() 
    <10 ? '0' + now.getHours() : now.getHours()
    const minut = now.getMinutes() 
    <10 ? '0' + now.getMinutes() : now.getMinutes()
      return `${hour}:${minut}, ${date}.${month}.${year}`
}
// show todos
function showTodos() {
    const todos = JSON.parse(localStorage.getItem('list'))
         listGroupTodo.innerHTML = ''
    todos.forEach((item, i) => {
        listGroupTodo.innerHTML += `
        <li ondblclick="setComplated(${i})" class="list-group-item  d-flex justify-content-between
        ${item.complated == true ? 'complated' : ''
        }">
              ${item.text}
                <div class="tod-icons">
                    <span class="opacity-50 me-2">${getTime()}</span>
                    <img onclick=(editTodo(${i})) src="/img/edit.svg" width="25" 
                    height="25"  alt="blabla"  />
                    <img onclick=(deleteTodo(${i})) src="/img/delete.svg" width="25" 
                    height="25" alt="blabla"  />
                </div>
        </li>
        `
    });
}
// show eror
function showMessage(where, message) {
    document.getElementById(`${where}`).textContent = message
    setTimeout(() => {
        document.getElementById(`${where}`).textContent = ''
    }, 2000);
}
// get Todos
formCreate.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = formCreate['input-create'].value.trim()
     formCreate.reset()
    if (todoText.length) {
        todos.push({text: todoText, time: getTime(), completed: 
        false })
        setTodos()
        showTodos()
    } else {
        showMessage('message-create', 'Please, enter some text...')
    }
})
 // time year , month , day, hour, minut , second
 setInterval(() => {
    const now = new Date()
    const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    const month = now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth()
    const year = now.getFullYear()
    fullDay.textContent = `${day}.${month}.${year}`
    hourEl.textContent = now.getHours() < 10 ? '0' + now.getHours()  : now.getHours() 
    minuteEl.textContent = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
    secondEl.textContent = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
  }, 1000);
  // DeleteTodo
  function deleteTodo(id) {
     const deleteTodos = todos.filter((item, i) => {
        return i !== id 
     })
     todos = deleteTodos , setTodos(),showTodos()
     }
  deleteTodo()
  //setCompleted
  function setComplated(id) {
    const setComplatedTodos = todos.map((item, i) => {
        if (id == i) {
            return {...item, complated: item.complated == true ? false : true}
        } else {
            return {...item}
        }
    })
    todos = setComplatedTodos
    setTodos()
    showTodos()
  }
  //  formEdit
  formEdit.addEventListener('submit', (e)=> {
      e.preventDefault()
      const todoText = formEdit['input-edit'].value.trim()
     formEdit.reset()
    if (todoText.length) {
        todos.splice(editItemId, 1, 
            {text: todoText, time: getTime(), completed: 
        false })
        setTodos()
        showTodos()
        close()
    } else {
        showMessage('message-edit', 'Please, enter some texts...')
    }
      
  })

  //editTodo
  function editTodo(id) {
      open(
        editItemId == id
      )
  }

  function open() {
     modal.classList.remove('hidden')
     overlay.classList.remove('hidden')
  }

  function close() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  }
  
  overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  })

  closeEl.addEventListener('click', () =>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  })