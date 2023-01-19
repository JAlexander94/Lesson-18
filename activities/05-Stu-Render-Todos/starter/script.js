var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

todoList.textContent = ""

todoCountSpan.textContent = todos.length

function rendertodo () {
    todoList.textContent = ""
    todoCountSpan.textContent = todos.length
    for (i=0;i<todos.length;i++){
        const litag = document.createElement("li")
        litag.textContent = todos[i]
        todoList.appendChild(litag)
    }
}

todoInput.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        event.preventDefault()
        if(todoInput.value===""){return}
        todos.push(todoInput.value)
        rendertodo()
        todoInput.value=""
    }
})