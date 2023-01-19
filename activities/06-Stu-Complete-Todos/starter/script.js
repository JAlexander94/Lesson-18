var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

function init() {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));

  if (storedTodos !== null) {
    todos = storedTodos;
  }

  renderTodos();
}

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {

    const li = document.createElement("li");
    li.textContent = todos[i];

    li.setAttribute("data-index", i);
    const button = document.createElement("button");
    button.textContent = "Complete";
    li.appendChild(button);

    button.addEventListener("click", function (event) {
      event.preventDefault();
      todos.splice(i, 1);
      storeTodos();
      renderTodos();
    });

    todoList.appendChild(li);
  }

}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, and update local storage
  todos.push(todoText);
  storeTodos();

  // Re-render the list
  renderTodos();

  // clear the input field
  todoInput.value = "";
});

// initialise our website
init();