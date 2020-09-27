let timerEl = document.querySelector("#timer");

// Countdown timer function
function startQuiz() {
  
    let timeLeft = 60;
  
    let timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + "Timer";
      timeLeft--;
  
      if (timeLeft === -1) {
        clearInterval(timeInterval);
        highscore();
      }
    }, 1000);
  };