var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var q = document.querySelector("h1");
var choice = document.querySelectorAll("choice");
var subQ = document.querySelector(".sub-heading-text");
var buttonArea = document.querySelector("button-area");
var n = 0;
var startButton = document.querySelector("#start-quiz");
var timeLeft = 50;
var resultButton = document.getElementById("result-btn");
var timerEl = document.querySelector(".timer");
var score = 0;
var gameOver = "false";
var wins = 0;
var losses = 0;
var game = startButton.addEventListener("click", quizHandlerStart);

function quizHandlerStart() {
  var intID = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "0";
      // Use `clearInterval()` to stop the timer
      clearInterval(intID);
      gameOver = "true";
      console.log("times up");
    }
  }, 1000);
  getQuestion();
  if (gameOver == "true") {
    return;
  }
}

function getQuestion() {
  q.innerText = questionSet[n].question;

  a.textContent = questionSet[n].answers[0].text;
  if (questionSet[n].answers[0].isCorrect) {
    a.setAttribute("data-is-correct", "true");
  } else {
    a.setAttribute("data-is-correct", "false");
  }

  b.innerText = questionSet[n].answers[1].text;
  if (questionSet[n].answers[1].isCorrect) {
    b.setAttribute("data-is-correct", "true");
  } else {
    b.setAttribute("data-is-correct", "false");
  }

  c.innerText = questionSet[n].answers[2].text;
  if (questionSet[n].answers[2].isCorrect) {
    c.setAttribute("data-is-correct", "true");
  } else {
    c.setAttribute("data-is-correct", "false");
  }

  startButton.parentNode.removeChild(startButton);
}

document.addEventListener("click", function (e) {
  if (e.target.matches(".choice")) {
    if (e.target.dataset.isCorrect === "true" && n < 4) {
      score += 1;
      n++;
      getQuestion();
      // if (score === 5 && e.target.dataset.isCorrect === "true"){
      //     gameOver = "true"
      //     addEndBtn();
      // } else if
    } else if (e.target.dataset.isCorrect === "true" && n == 4) {
      gameOver = "true";
      addEndBtn();
    } else {
      timeLeft -= 5;
    }
  }
});

function addEndBtn() {
  resultButton.setAttribute("class", "show");
  resultButton.addEventListener("click", function () {
    console.log("view results screen");
  });

  var initialInput = document.getElementById("initialsInput");
  initialInput.setAttribute("class", "show");
}

if (gameOver == "true") {
  buttonArea.querySelectorAll("button").setAttribute("class", "hidden");
  losses++;
}

// function scoreboard () {

// }

// function setWins () {
//     localStorage.setItem( );
// }

// function setLosses () {
//     localStorage.setItem()
// }
