const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

// strings variable
const TODOS_KEY = "todos";

// save todos part
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// del todo fn
function deleteTodo(event) {
  const targetLi = event.target.parentElement;
  targetLi.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(targetLi.id));
  saveTodos();
} // fn end

// paint todo fn
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✅";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
} // fn end

// todo submit fn start
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    // todo array to obj
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj); // push obj
  paintTodo(newTodoObj); // fn return end
  saveTodos();
} // fn end

// submit listener
todoForm.addEventListener("submit", handleTodoSubmit);

// saved todos load part
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
