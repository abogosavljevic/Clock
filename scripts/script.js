const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");
let date, hours, minutes, seconds;
const secondStepDegree = 360 / 60;
const minuteStepDegree = 360 / 60;
const hourStepDegree = 360 / 12;


function updateTime(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    rotateHands();
}

function rotateHands(){
    if((secondStepDegree * seconds) == 0){
        secondsHand.classList.remove("has-transition");
    }
    else{
        secondsHand.classList.add("has-transition");
    }

    if((minuteStepDegree * minutes) == 0){
        minutesHand.classList.remove("has-transition");
    }
    else{
        minutesHand.classList.add("has-transition");
    }

    if((hourStepDegree * seconds) == 0){
        hoursHand.classList.remove("has-transition");
    }
    else{
        hoursHand.classList.add("has-transition");
    }

    secondsHand.style.transform = "rotate("+ secondStepDegree * seconds +"deg)";
    minutesHand.style.transform = "rotate("+ minuteStepDegree * minutes +"deg)";
    hoursHand.style.transform = "rotate("+ hourStepDegree * hours +"deg)";
}

setInterval(updateTime, 1000);