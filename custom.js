let timer;

let userGet = () => {
    let ho = parseInt(prompt("Enter your Hours"));
    let mi = parseInt(prompt("Enter your Minutes"));
    let se = parseInt(prompt("Enter your Seconds"));
    return (ho * 3600) + (mi * 60) + se;
}
function timefunc(value) {
   return (value < 10) ? "0" + value : value
}
let start = () => {
    let time = userGet();
    timer = setInterval(() => {
        if (time <= 0) {
            clearInterval(timer);
            timer = null;
            return;
        }
        time--;

            document.getElementById("hours").innerHTML =timefunc(Math.floor(time / 3600));
            document.getElementById("min").innerHTML = timefunc(Math.floor((time % 3600) / 60));
            document.getElementById("sec").innerHTML = timefunc(Math.floor(time % 60));
    }, 1000);
}
let stop = () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}
let reset = () => {
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}
