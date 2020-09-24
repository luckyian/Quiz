var timerEl = document.querySelector("#timer");

// Countdown timer function
function startQuiz() {
  
    var timeLeft = 45;
  
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + "Timer";
      timeLeft--;
  
      if (timeLeft === -1) {
        clearInterval(timeInterval);
        highscore();
      }
    }, 1000);
  };