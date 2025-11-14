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
})




let defaultColor = document.body.style.backgroundColor = "#FF1A3C"
let defaultTime = updateTimer()

buttons1.forEach((button) => {
    button.addEventListener("click", () => {
        let hex = button.dataset.color;

        const r = parseInt(hex.substr(1,2), 16);
        const g = parseInt(hex.substr(3,2), 16);
        const b = parseInt(hex.substr(5,2), 16);
        
        document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    })
})