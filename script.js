window.onload = () => {
    clock = document.getElementById("clock");
    startClock = document.getElementById("start");
    stopClock = document.getElementById("stop");
    resetClock = document.getElementById("reset");

    startClock.addEventListener("click", startFunc);
    stopClock.addEventListener("click", stopFunc);
    resetClock.addEventListener("click", resetFunc);
}

var minCont = 0
var secCont = 0;

function startFunc(){
    setInterval(cont, 1000);
}

function stopFunc(){
    
}

function resetFunc(){
    
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