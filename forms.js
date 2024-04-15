//declare form variable
const todoInput = document.querySelector("#todoInput");

//function for adding new list
var addLi = () =>{
    var li = document.createElement("li");
    const todoList = document.querySelector("#todoList");
    li.appendChild(document.createTextNode(newTodo));
    todoList.appendChild(li);
};

//collect list input and display after submit
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    newTodo = todoInput.value;
    addLi();
});