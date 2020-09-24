

function startQuiz() {
    // Created the countdown timer.
  
    var timeLeft = 45;
  
    var timeInterval = setInterval(function () {
      countdownEl.textContent = timeLeft + "Timer";
      timeLeft--;
  
      if (timeLeft === -1) {
        clearInterval(timeInterval);
        highscore();
      }
    }, 1000);
  }