
let highScoreList = document.querySelector("#high-score-list");
let timerEl = document.querySelector("#timer");
let questionEl = document.querySelector("#q");

let answerOne = document.querySelector("#a1");
let answerTwo = document.querySelector("#a2");
let answerThree = document.querySelector("#a3");
let answerFour = document.querySelector("#a4");
let questionsEl = document.querySelector(".Questions");

let questionOne = ["Who is Jimmy Ray?", "A dreamer", "Who wants to know?", "A beliver", "Your mom"]
let questionTwo = ["Question 2?", "Q2Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let questionThree = ["Question 3?", "Q3Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let questionFour = ["Question 4?", "Q4Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let questionFive = ["Question 5?", "Q5Answer 1", "Answer 2", "Answer 3", "Answer 4"];
let questionSix = ["Question 6?", "Q6Answer 1", "Answer 2", "Answer 3", "Answer 4",];
let realAnswer = ["Who wants to know?", "Answer 2", "Answer 3", "Answer 4", "Answer 1", "Answer 2"];
let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
let currentQuestionIndex = 0;
let score = 0;

function areYouReady() {
  let firstAnswer = confirm("Do you want to start the quiz?");
  if (firstAnswer){
    startQuiz();
  }
  else {
    startQuiz();
  };
  
  
  
};

function checkAnswer(){
  // Compare answers

  console.log("button value" + this.value);
  
  
  if ((this.value === realAnswer[currentQuestionIndex])) {
    // Increase score on correct answer
    score++;
    alert("Correct!");
    currentQuestionIndex++;
    console.log(score);
    askQ();
  }
  // Decrease time on wrong answer
  else {
    alert("Wrong!");
    // timerLeft - 5;
    currentQuestionIndex++;
    console.log(score);
    askQ();
  }

};
// Fuctions to populate question and fill buttons with answers
function questionFill() {
  // for (i=0; i= 1; i++)
  questionEl.textContent = questions[currentQuestionIndex][0];
  console.log(currentQuestionIndex);
};

function buttonFill() {
  
  // for (i = 1; i < questions[currentQuestionIndex].length; i++){
  //   console.log(i);
  //   console.log(questionsEl.children);
  //   questionsEl.children[i].children[0].textContent = answers[i];
  // }

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


function askQ() {
 
  if (currentQuestionIndex <= questions.length){
    buttonFill();
    questionFill();
  }

  else {
    let finalScore = parseInt(score);
    alert("Your score is " + finalScore)
    let highScore = confirm("Would you like to save your high score?");
    if (highScore){
      initials

    }
  }
  // answerOne.addEventListener("click", function () {
  //   questionAnswer = "1";
  // });
  // answerTwo.addEventListener("click", function () {
  //   questionAnswer = "2";
  // });
  // answerThree.addEventListener("click", function () {
  //   questionAnswer = "3";
  // });
  // answerFour.addEventListener("click", function () {
  //   questionAnswer = "4";
  // });
};


function startQuiz() {
console.log("Started Quiz")
  // Countdown timer function
  // let timeLeft = 30;
  
  var button = document.createElement("button");
  
 
  // let timeInterval = setInterval(function () {
  //   timerEl.textContent = timeLeft + "Timer";
  //   timeLeft--;
  answerOne.addEventListener("click", checkAnswer);
  answerTwo.addEventListener("click", checkAnswer);
  answerThree.addEventListener("click", checkAnswer);
  answerFour.addEventListener("click", checkAnswer);

  askQ();
};
  //   if (timeLeft === 0) {
  //     }
  // }, 1000);

   // update time
//    time--;
//    timerEl.textContent = time;
//    // check if user ran out of time
//    if (time <= 0) {
//      quizEnd();
//    }
//  };
 
//  // start timer
//   //  timerId = setInterval(clockTick, 1000);
//    // show starting time
//    timerEl.textContent = time;

//  function quizEnd() {
//    // stop timer
//    clearInterval(timerId); }




  // for (var i = 0; i < questions.length;) {
    // Display current question to user and wait for answer on buttons
    // askQ();


   
  
  // }


let initialsHiSc = [];
// Function to take High Score Data and add it to both local storage and the highscore.html

function highScoreAdd() {

  var initials = prompt("Enter name for high score list");



  var li = document.createElement("li");
  li.textContent = (initials, "  " + score);


  li.appendChild(button);
  todoList.appendChild(li);
  var storedScores = JSON.parse(localStorage.getItem("hiScore"));

  if (storedScores !== null) {
    hiScore = storedScores;
  }
  highScoreList.appendChild(li);
  // Show total at end
  alert("You got " + score);

};
// };
areYouReady();