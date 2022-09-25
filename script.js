var sec = 0;
var timer = setInterval(function(){
document.getElementById("counter").innerHTML = sec+" Sekunden";
    sec++;
    if (sec < 0) {
        clearInterval(timer);
    }
}, 1000);