// Global variables
let highScoreList = document.querySelector("#high-score-list");
let timerEl = document.querySelector(".timer");
let questionEl = document.querySelector("#q");

let answerOne = document.querySelector("#a1");
let answerTwo = document.querySelector("#a2");
let answerThree = document.querySelector("#a3");
let answerFour = document.querySelector("#a4");
let questionsEl = document.querySelector(".Questions");

let questionOne = ["How do you manipulate the DOM?", "HTML", "JavaScript", "CSS", "With my mind!!"]
let questionTwo = ["How do you call the function: myFunction ?", "myFunction(GO!)", "GO my function!", "myFunction();", "let myFunction = 100;"];
let questionThree = ["What is CSS used for?", "Skateboarding", "Making functions", "Saving data", "Styling HTML"];
let questionFour = ["Who is credited with inventing JavaScript?", "Brendan Eich", "Steve Jobs", "Bill Gates", "Isaac Newton"];
let questionFive = ["What was JavaScript originally called?", "CamalCase", "The Script", "Latte", "Mocha"];
let questionSix = ["JavaScript originally appeared in what year?", "1964", "2010", "1995", "1986"];
let realAnswer = ["JavaScript", "myFunction();", "Styling HTML", "Brendan Eich", "Mocha", "1995"];
let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
let currentQuestionIndex = 0;
let score = 0;
let secondsLeft = 30;
var timerInterval;

// Confirm to start quiz, if no, sends to high score page
function areYouReady() {
  let firstAnswer = confirm("Do you want to start the quiz?");
  if (firstAnswer) {
    startQuiz();
  }
  else {
    window.location.href = "highscore.html";
  };



};


// Function to create timer
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Time Remaining ";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);

    }

  }, 1000);
};

function checkAnswer() {
  // Compare answers

  // Increase score on correct answer
  if (this.value === realAnswer[currentQuestionIndex]) {
    
    score++;
    currentQuestionIndex++;
    console.log(score);
    askQ();
  }

  // Decrease time on wrong answer
  else {
    secondsLeft = secondsLeft - 5;
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

  // This is the value for the button
  answerOne.setAttribute("value", questions[currentQuestionIndex][1]);
  answerTwo.setAttribute("value", questions[currentQuestionIndex][2]);
  answerThree.setAttribute("value", questions[currentQuestionIndex][3]);
  answerFour.setAttribute("value", questions[currentQuestionIndex][4]);
};

// Function that fills the text for buttons and question box using buttonFill and question fill functions. 

function askQ() {

  if (currentQuestionIndex <= questions.length - 1) {
    buttonFill();
    questionFill();
  }
  // Returns the user score and asks for initials, saves initials and high score to local machine
  else {
    clearInterval(timerInterval);
    let finalScore = parseInt(score);
    alert("Your score is " + finalScore)
    let highScoreCon = confirm("Would you like to save your high score?");
    if (highScoreCon) {
      var initials = prompt("Please enter your initials: ");
      parseInt(score);

      var highScore = {
        initials: initials,
        score: finalScore,
      };
      console.log(score, initials);
      
      // Saves high scores to local machine
      var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

      highScores.push(highScore);
      localStorage.setItem("highScores", JSON.stringify(highScores));
      console.log(highScores);
      window.location.href = "highscore.html";
    }
  }
};

// Function that adds eventlisters to buttons and starts timer
function startQuiz() {
  console.log("Started Quiz")




  answerOne.addEventListener("click", checkAnswer);
  answerTwo.addEventListener("click", checkAnswer);
  answerThree.addEventListener("click", checkAnswer);
  answerFour.addEventListener("click", checkAnswer);





  setTime();

  askQ();
};
// Runs function that asks if they want to start quiz
areYouReady();