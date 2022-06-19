const body = document.body;

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginTitle = document.querySelector(".login__title");
const toDoForm = document.getElementById("todo-form");
const quoteDiv = document.getElementById("quote");
const signOut = document.querySelector(".sign-out");
const clock = document.querySelector("#clock");
const dateSpan = document.querySelector("#date");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const API_KEY = "5d82b93e04a4c84fffae6184fd61f567";

const images = [
    "http://drive.google.com/uc?export=view&id=1gk2156vqrTwVGbUb2DIvdYyQrIlXscAc", // 0.jpg
    "http://drive.google.com/uc?export=view&id=1OQkwvwttAxm9qsT7vDmRhEdx8E50w6ck", // "1.jpg",
    "http://drive.google.com/uc?export=view&id=1HdbTQXmaTOAp13XJ5BZ9w9UmbBXqYpsH", // "2.jpg",
    "http://drive.google.com/uc?export=view&id=1Xk64Hp9A-_MCk4JLd8yJvfLJxLdZwdYy", // "3.jpg",
    "http://drive.google.com/uc?export=view&id=1ziWlk4w6gB6dtEydt9mVSVgZB4I0Occt", // "4.jpg",
    "http://drive.google.com/uc?export=view&id=10lMRUfHaCcDpB1aUkJzSlEFsynywtoNx", // "5.jpg",
    "http://drive.google.com/uc?export=view&id=1fOffqI4g4JZFPZfmxMsLzo4g9LOvHgZB", // "6.jpg",
    "http://drive.google.com/uc?export=view&id=1Vq1WpQm5KpCrZuLVmvp5XRKwn54wOinN", // "7.jpg",
    "http://drive.google.com/uc?export=view&id=1pzMBNqgl5GOubfDeAsN24kQIHajB9XEm", // "8.jpg",
    "http://drive.google.com/uc?export=view&id=1nllaQhMgYbVKQjETgw41stI3Xm9HA4r8", // "9.jpg"
];

const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];