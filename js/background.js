const chosenImage = images[Math.floor(Math.random() * images.length)];

function removeSplashScreen() {
    const splashScreen = document.querySelector("#splash-screen");
    splashScreen.classList.add("remove-splash-screen-animation");
}

body.style.backgroundImage = `url(${chosenImage})`;
body.style.backgroundSize = "cover";
body.onload = removeSplashScreen;