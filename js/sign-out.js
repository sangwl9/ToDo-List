// Hidden todo list elements, init login input, and change html title
function onSignOut(){
    localStorage.removeItem(USERNAME_KEY);

    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginTitle.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";

    toDoForm.classList.add(HIDDEN_CLASSNAME);
    quoteDiv.classList.add(HIDDEN_CLASSNAME);
    signOut.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    toDoList.classList.add(HIDDEN_CLASSNAME);

    document.title = LOGIN_TITLE;
}

// Add event listener to sign out
signOut.addEventListener("click", onSignOut);