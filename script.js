const buttons1 = document.querySelectorAll(".btn");
const timer = document.querySelector("#timer");
const buttons2 = document.querySelectorAll("#bottom-btns .btn");
const timerContainer = document.querySelector("#timer-container");
const timerDisplay = document.querySelector(".time");
const activeButton = document.querySelectorAll(".active");
const startButton = document.querySelector(".btn1");
const pauseButton = document.querySelector(".btn2");
const resetButton = document.querySelector(".btn3");


let sMin = 25;
let time = sMin * 60;
let countdown = null;
let currentMode = "pomodoro";

function updateTimer() {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  sec = sec < 10 ? '0' + sec : sec;

  
  timerDisplay.textContent = `${min}:${sec}`

  time--;
  if (time < 0) {
    clearInterval(countdown);
    countdown = null;
  }
}


startButton.addEventListener("click", () => {
if (countdown !== null) return;

countdown = setInterval(updateTimer, 1000);
});

pauseButton.addEventListener("click", () => {
    if (countdown !== null) {
    clearInterval(countdown);
    countdown = null;
  }
})

resetButton.addEventListener("click", () => {
    if (countdown !== null) {
        clearInterval(countdown);
        countdown = null;
    }
    
    time = sMin * 60;

    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? '0' + sec : sec;
    timerDisplay.textContent = `${min}:${sec}`;
    setTime(currentMode);
})

const setTime = (mode) => {
    switch(mode) {
        case "pomodoro":
            sMin = 25;
            break;
        case "short":
            sMin = 5;
            break;
        case "long":
            sMin = 15;
            break;
    }
    time = sMin * 60;
    updateTimer();
}

function darkenColor(hex, percent) {
  const r = parseInt(hex.substr(1,2), 16);
  const g = parseInt(hex.substr(3,2), 16);
  const b = parseInt(hex.substr(5,2), 16);
  
  const newR = Math.floor(r * (1 - percent));
  const newG = Math.floor(g * (1 - percent));
  const newB = Math.floor(b * (1 - percent));
  
  return `rgb(${newR}, ${newG}, ${newB})`;
}

buttons1.forEach((button) => {
        button.addEventListener("click", () => {
        let hex = button.dataset.color;
        buttons1.forEach(btn => btn.style.backgroundColor = "transparent");

        button.style.backgroundColor = darkenColor(hex, 0.3);

        currentMode = button.dataset.mode;
        setTime(currentMode);

        const r = parseInt(hex.substr(1,2), 16);
        const g = parseInt(hex.substr(3,2), 16);
        const b = parseInt(hex.substr(5,2), 16);
        
        document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    })
})

window.addEventListener('DOMContentLoaded', () => {
  const pomodoroButton = Array.from(buttons1).find(btn => btn.dataset.mode === 'pomodoro');
  if (pomodoroButton) {
    const hex = pomodoroButton.dataset.color;
    pomodoroButton.style.backgroundColor = darkenColor(hex, 0.3);
    document.body.style.backgroundColor = hex;
  }
  updateTimer();
});