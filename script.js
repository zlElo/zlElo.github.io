var sec = 0;
var timer = setInterval(function(){
document.getElementById("counter").innerHTML = sec+" Sekunden";
    sec++;
    if (sec < 0) {
        clearInterval(timer);
    }
    if (sec == 600) {
        document.getElementById("gif").innerHTML = "<img src='pictures/dog.gif'>"
    }
    if (sec == 608) {
        document.getElementById("gif").innerHTML = ""
    }
}, 1000);