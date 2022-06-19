function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const monthString = MONTH[date.getMonth()];
    const dayString = WEEKDAY[date.getDay()];
    const dayNum = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    dateSpan.innerText = `${dayString}, ${monthString} ${dayNum}, ${year}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock();
setInterval(getClock, 1000);

// setTimeout(sayHello, 5000);
