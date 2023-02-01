'use strict';

// dark mode button
let darkMode = document.getElementById('dark-btn');
darkMode.addEventListener('click', function() {
    let dark = document.body;
    dark.classList.toggle('dark-mode');
    if (darkMode.classList == 'btn-light') {
        darkMode.classList.add('btn-dark');
        darkMode.classList.remove('btn-light');
    }else{
        darkMode.classList.remove('btn-dark');
        darkMode.classList.add('btn-light');
    }    
});

//starting alert timer
//get all elements
const img = document.querySelector("img");
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let alertMin = document.getElementById('alert-count-min');
let alertSec = document.getElementById('alert-count-sec');
let snoozeMin = document.getElementById('snooze-count-min');
let start = document.getElementById('start');
let snoozeSec = document.getElementById('snooze-count-sec');
const incrementCount = document.getElementById("alert-increment");
const decrementCount = document.getElementById("alert-decrement");
const snoozeIncrementCount = document.getElementById("snooze-increment");
const snoozeDecrementCount = document.getElementById("snooze-decrement");

//adding audio
const ringtone = new Audio(
  "alarm-clock-short-6402.mp3"
);

//create a variable to control with
let setTimer;

//add events
start.addEventListener('click', () =>{
  setTimer === undefined ? setTimer = setInterval(time, 1000): alert('alert is already running');  
})

reset.addEventListener('click',() =>{
  alertMin.innerText = 25;
  alertSec.innerText = '00';
  snoozeMin.innerText = 5;
  snoozeSec.innerText = '00';   
  stopInterval();
  setTimer = undefined;
})

pause.addEventListener('click',()=>{
  stopInterval();
  setTimer = undefined;
})
//function to check about the time min and sec
function time() {
  if (alertSec.innerText != 0) {
    alertSec.innerText--;    
  }else if (alertMin.innerHTML != 0 && alertSec.innerText == 0) {
    alertSec.innerText = 59;
    alertMin.innerText--;    
  }

  if (alertMin.innerText == 0 , alertSec.innerText == 0) {
    img.classList.add("on");
    ringtone.play(),2000;
    if (snoozeSec.innerText != 0 ) {
      snoozeSec.innerText--;  
      img.classList.remove("on");   
      ringtone.pause(); 
    }else if (snoozeMin.innerHTML != 0 && snoozeSec.innerText == 0) {
      snoozeSec.innerText = 59;
      snoozeMin.innerText--;
    }
  }

  if (alertMin === 0 && alertSec === 0 && snoozeMin === 0 && snoozeSec ===0) {
    alertMin.innerText = 25;
    alertSec.innerText = '00';
    snoozeMin.innerText = 5;
    snoozeSec.innerText = '00';   
  }
}

//stop interval
function stopInterval(){
  clearInterval(setTimer);
}

//increment add decrement functions
// Function to increment count
const handleAlertIncrement = () => {
  alertMin.innerText++; 
};
// Function to decrement count
const handleAlertDecrement = () => {
  alertMin.innerText <= 1 ? alert('you should wake up 🛏️') : alertMin.innerText--;
};
// Function to increment count
const handleSnoozeIncrement = () => {
  snoozeMin.innerText++; 
};
// Function to decrement count
const handleSnoozeDecrement = () => {
  snoozeMin.innerText <= 1 ? alert('wake up 🥱') : snoozeMin.innerText--;
};

// Add click event to buttons
incrementCount.addEventListener("click", handleAlertIncrement);
decrementCount.addEventListener("click", handleAlertDecrement);
snoozeIncrementCount.addEventListener("click", handleSnoozeIncrement);
snoozeDecrementCount.addEventListener("click", handleSnoozeDecrement);