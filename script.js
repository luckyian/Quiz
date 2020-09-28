

let timerEl = document.querySelector("#timer");
let questionEl = document.querySelector("#q");
let answerOne = document.querySelector("#a1");
let answerTwo = document.querySelector("#a2");
let answerThree = document.querySelector("#a3");
let answerFour = document.querySelector("#a4");
let questionsEl = document.querySelector("#Questions");

let questionOne = ["Question 1?","Answer 1","Answer 2","Answer 3","Answer 4"]
let questionTwo = ["Question 2?","Answer 1","Answer 2", "Answer 3","Answer 4"];
let questionThree = ["Question 3?","Answer 1","Answer 2","Answer 3","Answer 4"];
let questionFour = ["Question 4?","Answer 1","Answer 2","Answer 3","Answer 4"];
let questionFive = ["Question 5?","Answer 1","Answer 2","Answer 3","Answer 4"];
let questionSix = ["Question 6?","Answer 1","Answer 2","Answer 3","Answer 4",];
let realAnswer = ["1","2","3","4","1","2"];
let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];





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
  // Fuctions to populate question and fill buttons with answers
    function buttonFill(answers){
      for (i=1; i < answers.length; i++)
      questionsEl.children[i].children[0].textContent = answer[i];
     };
    function questionFill(question){
      for (i=0; i= 1; i++)
      questionsEl.children[i].textContent = question[i];
    };
 
    function askQ()
    {
    function buttonFill();
    function questionFill();
   
    answerOne.addEventListener("click", function () {
      questionAnswer = "1";
    });
    answerTwo.addEventListener("click", function () {
      questionAnswer = "2";
    });
    answerThree.addEventListener("click", function () {
      questionAnswer = "3";
    });
    answerFour.addEventListener("click", function () {
      questionAnswer = "4";
    });

  };

  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and wait for answer on buttons
    function askQ();

    // Compare answers
    if ((questionAnswer === realAnswer[i]))
       {
      // Increase score
      score++;
      alert("Correct!");
    }
    else {
      alert("Wrong!");
      timerLeft-5;
    }
  }

  // Show total at end
  alert("You got " + score );

};