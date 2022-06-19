// const images = [
//     "http://drive.google.com/uc?export=view&id=1gk2156vqrTwVGbUb2DIvdYyQrIlXscAc", // 0.jpg
//     "http://drive.google.com/uc?export=view&id=1OQkwvwttAxm9qsT7vDmRhEdx8E50w6ck", // "1.jpg",
//     "http://drive.google.com/uc?export=view&id=1HdbTQXmaTOAp13XJ5BZ9w9UmbBXqYpsH", // "2.jpg",
//     "http://drive.google.com/uc?export=view&id=1Xk64Hp9A-_MCk4JLd8yJvfLJxLdZwdYy", // "3.jpg",
//     "http://drive.google.com/uc?export=view&id=1ziWlk4w6gB6dtEydt9mVSVgZB4I0Occt", // "4.jpg",
//     "http://drive.google.com/uc?export=view&id=10lMRUfHaCcDpB1aUkJzSlEFsynywtoNx", // "5.jpg",
//     "http://drive.google.com/uc?export=view&id=1fOffqI4g4JZFPZfmxMsLzo4g9LOvHgZB", // "6.jpg",
//     "http://drive.google.com/uc?export=view&id=1Vq1WpQm5KpCrZuLVmvp5XRKwn54wOinN", // "7.jpg",
//     "http://drive.google.com/uc?export=view&id=1pzMBNqgl5GOubfDeAsN24kQIHajB9XEm", // "8.jpg",
//     "http://drive.google.com/uc?export=view&id=1nllaQhMgYbVKQjETgw41stI3Xm9HA4r8", // "9.jpg"
// ];

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.bmp",
    "7.jpg",
    "8.jpg",
    "9.bmp"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

function removeSplashScreen() {
    const splashScreen = document.querySelector("#splash-screen");
    splashScreen.classList.add("remove-splash-screen-animation");
}

body.style.backgroundImage = `url(img/${chosenImage})`;
body.style.backgroundSize = "cover";
body.onload = removeSplashScreen;