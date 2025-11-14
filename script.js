const buttons1 = document.querySelectorAll(".btn");
const timer = document.querySelector("#timer");
const buttons2 = document.querySelectorAll("#bottom-btns");
const timerContainer = document.querySelector("#timer-container")
const minDisplay = document.querySelector(".minutes")
const secDisplay = document.querySelector(".seconds")


let sMin = 25;
let time = sMin * 60;

function updateTimer() {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  sec = sec < 10 ? '0' + sec : sec;

  minDisplay.textContent = min;
  secDisplay.textContent = sec;

  time--;
  if (time < 0) clearInterval(countdown);
}

buttons2.forEach((button) => {
    button.addEventListener("click", updateTimer)
})



buttons1.forEach((button) => {
    button.addEventListener("click", () => {
        let hex = button.dataset.color;

        const r = parseInt(hex.substr(1,2), 16);
        const g = parseInt(hex.substr(3,2), 16);
        const b = parseInt(hex.substr(5,2), 16);

        const grayishR = Math.floor((r + 127) / 2);
        const grayishG = Math.floor((g + 127) / 2);
        const grayishB = Math.floor((b + 127) / 2);

        timerContainer.style.backgroundColor = `rgba(${grayishR}, ${grayishG}, ${grayishB}, 0.4)`;
        timerContainer.style.backdropFilter = `blur(10px)`;
        document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    })
})