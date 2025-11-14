const buttons1 = document.querySelectorAll(".btn");
const timer = document.querySelector("#timer");
const buttons2 = document.querySelectorAll("#bottom-btns");



// creating a function to simulate the functionality of a timer
// let mainTimer = (tiem) => {
//     startingTime = 25;
//     let time = startingTime * 60


// }

buttons1.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonColor = button.dataset.color;
        document.body.style.backgroundColor = buttonColor;
    })
})