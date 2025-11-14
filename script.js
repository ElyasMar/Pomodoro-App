const buttons1 = document.querySelectorAll(".btn");
const timer = document.querySelector("#timer");
const buttons2 = document.querySelectorAll("#bottom-btns");
const timerContainer = document.querySelector("#timer-container")



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