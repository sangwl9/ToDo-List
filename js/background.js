// Get a random number to choice a image
const chosenImage = images[Math.floor(Math.random() * images.length)];
// Add the removing splash screen animation to hidden the splash screen 
function removeSplashScreen() {
    const splashScreen = document.querySelector("#splash-screen");
    splashScreen.classList.add("remove-splash-screen-animation");
}
// Add a background image to css
body.style.backgroundImage = `url(${chosenImage})`;
body.style.backgroundSize = "cover";
// onload runs removeSplashScreen to wait all elements on the web browser to be ready
body.onload = removeSplashScreen;