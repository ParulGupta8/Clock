setInterval(myclock, 1000);

let hourHand=document.querySelector('[data-hour-hand]');
let minuteHand=document.querySelector('[data-minute-hand]');
let secondHand=document.querySelector('[data-second-hand]');

function myclock(){
    let d=new Date();

    let secondsRatio = d.getSeconds()/60;
    let minutesRatio = (secondsRatio + d.getMinutes())/60;
    let hoursRatio = (minutesRatio + d.getHours())/12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

}

    function setRotation(element, ratio){
        element.style.setProperty( "transform", `rotate(${(ratio * 360)}deg) `);
    }
    //transform: rotate()

myclock();

//DIGITAL CLOCK...
let time = document.getElementById("time");
setInterval(showTime, 1000);

function showTime(){
    d= new Date();
    let hours=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    let AmPm="AM";

    if(hours<12)
        AmPm="AM";
    else
        AmPm="PM";

    if(hours>12) 
        hours = hours-12;

    if(hours<10)
        hours = "0"+hours;
    if(min<10)
        min = "0"+min;
    if(sec<10)
        sec = "0"+sec;
    
    time.innerHTML= `${hours} : ${min} : ${sec} ${AmPm}` ;
    }
