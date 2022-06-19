// Todo array can be changed
let toDos = [];
// Save todo array to local storage
function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// Delete a todo and resave todo array to local storage
function deleteToDo(event) {
    // Get selected li
    const li = event.target.parentElement;
    // remove todos in todo array if id of selected li in todo array
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // save todo array to local storage
    saveToDo();
    // remove li on html
    li.remove();
}
// Add a new todo to html
function paintToDo(newToDo) {
    // Create li, span to show todo, button to delete
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    // Add li id to use when delete todo
    li.id = newToDo.id;
    span.innerText = newToDo.text;  // Add todo
    button.innerText = `X`;         // Add delete button text
    
    button.addEventListener("click", deleteToDo); // Add button event lisrener to delete
    // Add elements to html
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
// Create and save a new todo when todo input is submitted
function handleToDoSubmit(event) {
    event.preventDefault();             // Prevent refresh
    const newToDo = toDoInput.value;    // Get todo from todo input on html 
    toDoInput.value = "";               // Init todo input
    const newToDoObj = {                // Create a new todo object
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);             // Save todo to todo array
    paintToDo(newToDoObj);              // Add todo to todo list on html
    saveToDo();                         // Save todo to local storage
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // Get todo list from local storage
// Check todo list is in local storage
// if ok, add todo list to todo array and paint them to html
if (savedToDos){
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
}