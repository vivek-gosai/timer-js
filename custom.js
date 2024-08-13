let timelet;
let userGet = () => {
    let ho = parseInt(prompt("Enter your Hours"));
    let mi = parseInt(prompt("Enter your Minutes"));
    let se = parseInt(prompt("Enter your Seconds"));
    return (ho * 3600) + (mi * 60) + se;
}
function timefunc(value) {
    return (value < 10) ? "0" + value : value
}
let time = userGet();
let timea = () => {
    if (time <= 0) {
        clearInterval(timelet);
        return;
    }
    time--;
    document.getElementById("hours").innerHTML = timefunc(Math.floor(time / 3600));
    document.getElementById("min").innerHTML = timefunc(Math.floor((time % 3600) / 60));
    document.getElementById("sec").innerHTML = timefunc(Math.floor(time % 60));
}
let start = () => {
    if (timelet) {
        clearInterval(timelet); // Clear any existing interval
    }
    timelet = setInterval(timea, 1000);
}
const stop = () => {
    if (timelet) {
        clearInterval(timelet); // Stop the countdown
    }
}
const reset = () => {
    time = userGet();  //reset button get value
    if (timelet) {
        clearInterval(timelet);
    }
    document.getElementById("hou").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";    //reset value (00 00 00)
    document.getElementById("sec").innerHTML = "00";
}