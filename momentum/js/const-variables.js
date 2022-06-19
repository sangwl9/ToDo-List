const body = document.body;

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginTitle = document.querySelector(".login__title");
const toDoForm = document.getElementById("todo-form");
const quoteDiv = document.getElementById("quote");
const signOut = document.querySelector(".sign-out");
const clock = document.querySelector("#clock");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const API_KEY = "5d82b93e04a4c84fffae6184fd61f567";