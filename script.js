let highScoreList = document.querySelector("#high-score-list");
let timerEl = document.querySelector(".timer");
let questionEl = document.querySelector("#q");

let answerOne = document.querySelector("#a1");
let answerTwo = document.querySelector("#a2");
let answerThree = document.querySelector("#a3");
let answerFour = document.querySelector("#a4");
let questionsEl = document.querySelector(".Questions");

let questionOne = ["Who is Jimmy Ray?", "A dreamer", "Who wants to know?", "A beliver", "Your mom"]
let questionTwo = ["Question 2?", "Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let questionThree = ["Question 3?", "Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let questionFour = ["Question 4?", "Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let questionFive = ["Question 5?", "Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let questionSix = ["Question 6?", "Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let realAnswer = ["Who wants to know?", "Answer 2", "Answer 3", "Answer 4", "Answer 1", "Answer 2"];
let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
let currentQuestionIndex = 0;
let score = 0;
let secondsLeft = 90;

function areYouReady() {
  let firstAnswer = confirm("Do you want to start the quiz?");
  if (firstAnswer) {
    startQuiz();
  }
  else {
    startQuiz();
  };



};



function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Time Remaining ";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);

    }

  }, 1000);
};

function checkAnswer() {
  // Compare answers

  console.log("button value" + this.value);


  if ((this.value === realAnswer[currentQuestionIndex])) {
    // Increase score on correct answer
    score++;
    currentQuestionIndex++;
    console.log(score);
    askQ();
  }
  // Decrease time on wrong answer
  else {
    timerLeft - 5;
    currentQuestionIndex++;
    console.log(score + "score");
    askQ();
  }

};
// Fuctions to populate question and fill buttons with answers
function questionFill() {
  questionEl.textContent = questions[currentQuestionIndex][0];
  console.log(currentQuestionIndex + "Qfill");
};

function buttonFill() {


  answerOne.textContent = questions[currentQuestionIndex][1];
  answerTwo.textContent = questions[currentQuestionIndex][2];
  answerThree.textContent = questions[currentQuestionIndex][3];
  answerFour.textContent = questions[currentQuestionIndex][4];

  // This the value for the button
  answerOne.setAttribute("value", questions[currentQuestionIndex][1]);
  answerTwo.setAttribute("value", questions[currentQuestionIndex][2]);
  answerThree.setAttribute("value", questions[currentQuestionIndex][3]);
  answerFour.setAttribute("value", questions[currentQuestionIndex][4]);
};

// Function that fills the text for buttons and question box using buttonFill and question fill functions. 

function askQ() {

  if (currentQuestionIndex <= questions.length) {
    buttonFill();
    questionFill();
  }
  // Returns the user score and asks for initials, saves initials and hiogh score to local machine
  else {
    let finalScore = parseInt(score);
    alert("Your score is " + finalScore)
    let highScoreCon = confirm("Would you like to save your high score?");
    if (highScoreCon) {
      var initials = prompt("Please enter your initials: ");
      parseInt(score);

      var highScore = {
        initials: initials.value,
        score: score.value,
      };

      // Saves high scores to local machine
      var highScores = JSON.parse(localStorage.getItem("highScores"));
      highScores = highScores + highScore;
      localStorage.setItem("highScores", JSON.stringify(highScores));
      console.log(highScores);
    }
  }
};

// Function that adds eventlisters to buttons and starts timer
function startQuiz() {
  console.log("Started Quiz")


  // var button = document.createElement("button");



  answerOne.addEventListener("click", checkAnswer);
  answerTwo.addEventListener("click", checkAnswer);
  answerThree.addEventListener("click", checkAnswer);
  answerFour.addEventListener("click", checkAnswer);





  setTime();

  askQ();
};

areYouReady();