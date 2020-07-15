var min=0;
var sec=0;
var msec=0;
var stopWatch=document.querySelector('.stopwatch');
var lapsContainer=document.querySelector('.lap');


var timer;
function run(){
    stopWatch.textContent=(min < 10 ? "0"+ min : min)+":"+(sec < 10 ? "0"+ sec : sec)+":"+(msec < 10 ? "0"+ msec : msec);
    msec++;
    if(msec==100){
        sec++;
        msec=0;
    }
    else if(sec == 60){
        min++;
        sec=0;
    }
}
function start(){
if(!timer){
    timer=setInterval(run,10);
    }
}
function stopTimer(){
    clearInterval(timer);
    timer=false;
}
    function stop(){
        stopTimer();
         min=0;
         sec=0;
         msec=0;
        resetLap();
        stopWatch.textContent=getTime();
    }
    function getTime(){
        return(min < 10 ? "0"+ min : min)+":"+(sec < 10 ? "0"+ sec : sec)+":"+(msec < 10 ? "0"+ msec : msec)

    }

function pause(){
    stopTimer();
}

function lap(){
    if(timer){
        var li=document.createElement('li');
        li.innerHTML=getTime();
        lapsContainer.appendChild(li);
    }
}
function resetLap(){
    lapsContainer.innerHTML=""
}

function disableBtn(){
    var btn=document.getElementById("disable");
    btn.disabled=true;
}
function enableBtn(){
    var btn=document.getElementById("disable");
    btn.disabled=false;
}
function disableL(){
    var btn=document.getElementsByClassName("dis");
    for(var i=0;i<=1;i++){
    btn[i].disabled=true;
}
}
function enableL(){
    var btn=document.getElementsByClassName("dis");
    for(var i=0;i<=1;i++){
        btn[i].disabled=false;
    }
}