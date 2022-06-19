function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span");
        const weatherIcon = document.querySelector("#weather img");
        const city = document.querySelector("#city span");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
        weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// https://api.openweathermap.org/data/2.5/weather?lat=37.3489664&lon=127.1136256&appid=5d82b93e04a4c84fffae6184fd61f567