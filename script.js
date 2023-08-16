const determineGreet = hours => document.getElementById("greeting").innerText = `It's ${hours < 12 ? "Morning and Currently" : hours < 18 ? "Afternoon and Currently" : "Evening and Currently"}`;

window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    determineGreet(new Date().getHours());
    displayTime(time);
});

setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    document.getElementById("time").innerHTML = time;
}, 1000);

function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}
