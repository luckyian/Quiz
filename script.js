

let timerEl = document.querySelector("#timer");
let questionEl = document.querySelector("#q");
let answerOne = document.querySelector("#a1");
let answerTwo = document.querySelector("#a2");
let answerThree = document.querySelector("#a3");
let answerFour = document.querySelector("#a4");

function getStarted(){
  let questionEl.textContent("Do you want to start the quiz?")
}



function startQuiz() {
  
  // Countdown timer function
    let timeLeft = 60;
  
    let timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + "Timer";
      timeLeft--;
  
      if (timeLeft === -1) {
        clearInterval(timeInterval);
        highscore();
      }
    }, 1000);
    function buttonFill(){
      
    }
 
 
    function askQ(){
    function buttonFill();
    function questionFill();

  };

  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    function askQ();

    // Compare answers
    if ((answer === true && questions[i].a === "t") ||
      (answer === false && questions[i].a === "f")) {
      // Increase score
      score++;
      alert("Correct!");
    }
    else {
      alert("Wrong!");
    }
  }

  // Show total at end
  alert("You got " + score );

};