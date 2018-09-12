// COUNT DOWN TIMER

function startCountDown() {
  var countDownFrom = [40, 0];
  document.querySelector("#mins").textContent = countDownFrom[0];

  // Decrease time
  setInterval(function() {
    
    // update minutes
    if (countDownFrom[1] === 0 && countDownFrom[0] !== 0) {
      countDownFrom[0] -= 1;
      document.querySelector("#mins").textContent = countDownFrom[0];
    }
    // make minutes two digits
    if (countDownFrom[0] < 10) {
      document.querySelector("#mins").textContent = '0' + countDownFrom[0];
      if (countDownFrom[0] < 2) {
        document.getElementById("timer").classList.add("time-low");
      }
    } else {
      document.querySelector("#mins").textContent = countDownFrom[0];
    }

    // update seconds
    if (countDownFrom[1] === 0) {
        countDownFrom[1] += 59;
        document.querySelector("#secs").textContent = countDownFrom[1];
    } else if (countDownFrom[0] === 0 && countDownFrom[1] === 1) {
      countDownFrom[1] = "0";
    } else if (countDownFrom[1] !== "0") {
      countDownFrom[1] -= 1;
    }

    // make seconds two digits
    if (countDownFrom[1] < 10) {
      document.querySelector("#secs").textContent = '0' + countDownFrom[1];
    } else {
      document.querySelector("#secs").textContent = countDownFrom[1];
    }

  }, 1000);
}

startCountDown();

// ACCESS CODE
var entryNumber = 0;

// display access code
var accessCode = ["-", "-", "-", "-"];

// pressed button
var numButtons = document.querySelector(".button-container");
numButtons.addEventListener("click", pressedButton);

function pressedButton(event) {
  if (event.target !== event.currentTarget && entryNumber < accessCode.length && event.target.value !== undefined && event.target !== document.querySelector(".clear")) {
    accessCode[entryNumber] = event.target.value;
    document.querySelector(".access-code .center").textContent = accessCode[0] + " " + accessCode[1] + " " + accessCode[2] + " " + accessCode[3];
    entryNumber += 1;
  }
}

// pressed clear button
document.querySelector(".clear").addEventListener("click", function() {
  accessCode = ["-", "-", "-", "-"];
  entryNumber = 0;
  document.querySelector(".access-code .center").textContent = accessCode[0] + " " + accessCode[1] + " " + accessCode[2] + " " + accessCode[3];
});