// Get date and clock info, and add themz to html
function getClock() {
    // Get a today object
    const date = new Date();
    // Get date info
    const year = date.getFullYear();
    const monthString = MONTH[date.getMonth()];
    const dayString = WEEKDAY[date.getDay()];
    const dayNum = String(date.getDate()).padStart(2, "0");
    // Get clock info
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // Add date and clock text
    dateSpan.innerText = `${dayString}, ${monthString} ${dayNum}, ${year}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// Call getClock because setInterval call getClock after the first 1 second
getClock();
// Call getClock every 1 second.
setInterval(getClock, 1000);