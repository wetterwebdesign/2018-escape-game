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
      console.log("fired");
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