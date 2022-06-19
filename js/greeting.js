// Save username to the localstorage
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginTitle.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// Show todo list elements
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    document.title = WELCOME_TITLE;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    quoteDiv.classList.remove(HIDDEN_CLASSNAME);
    signOut.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
}

// get saved username on the localstorage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // if username not on the localstorage, show login elements and hidden todo list elements
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginTitle.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // if username on the localstorage, show todo list elements and hidden login elements
    paintGreetings(savedUsername);
}