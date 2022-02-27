const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.className = "li";
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.id = "span";
    const button = document.createElement("button");
    button.id = "button";
    button.innerText = "➖";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}


todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem("todos");
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}