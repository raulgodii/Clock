window.onload = () => {
    clock = document.getElementById("clock");
    startClock = document.getElementById("start");
    stopClock = document.getElementById("stop");
    resetClock = document.getElementById("reset");

    startClock.addEventListener("click", startFunc);
    stopClock.addEventListener("click", stopFunc);
    resetClock.addEventListener("click", resetFunc);
}

var minCont = 0;
var secCont = 1;
var firstTime = true;

function startFunc(){
    if(firstTime){
        cont();
        interval = setInterval(cont, 1000);
        firstTime = false;
    }
}

function stopFunc(){
    clearInterval(interval);
    firstTime = true;
}

function resetFunc(){
    clearInterval(interval);
    secCont = 1;
    minCont = 0;
    clock.innerHTML = "00:00";
    firstTime = true;
}

function cont(){
    let seconds = secCont < 10 ? "0" + secCont : secCont;
    let minutes = minCont < 10 ? "0" + minCont : minCont;
    clock.innerHTML = minutes + ":" + seconds;

    secCont++;
    if(secCont == 60){
        secCont = 0;
        minCont++;
    }
    if(minCont == 60){
        minCont = 0;
    } 
}