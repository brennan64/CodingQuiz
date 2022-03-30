// static/ui
var buttons = {
  a: document.querySelector("button#a"),
  b: document.querySelector("button#b"),
  c: document.querySelector("button#c"),
  start: document.querySelector("button#start-quiz"),
  results: document.querySelector("button#result-btn"),
};

var text = {
  heading: document.querySelector(".heading-area > h1"),
  subheading: document.querySelector(".heading-area > p"),
  timer: document.querySelector(".heading-area > .timer"),
  initials: document.querySelector("input#initials"),
};

// dynamic/used in business logic
var questionIdx = 0;
var score = 0;
var timeLeft = questionSet.length * 10;
var intervalId = null;

function startGame() {
  buttons.start.addEventListener("click", function (e) {
    e.preventDefault();

    // start timer
    intervalId = setInterval(tick, 1000);

    // hide start button
    buttons.start.setAttribute("class", "hidden");

    // add event listeners to each button
    [buttons.a, buttons.b, buttons.c].forEach(function (btn, idx) {
      const currentQ = questionSet[questionIdx];
      const currentA = currentQ.answers[idx];
      btn.textContent = currentA.text;
      btn.addEventListener("click", function (e) {
        console.log("button event listener");
        e.preventDefault();
        questionIdx++;

        if (currentA.isCorrect) {
          console.log("correct");
          score += 1;
        } else {
          console.log("incorrect");
          timeLeft -= 5;
        }

        if (questionIdx < questionSet.length) getNextQuestion();
        else endGame();
      });
    });

    getNextQuestion();
  });
}

function endGame() {
  console.log(`score: ${score}`);
  clearInterval(intervalId);

  [buttons.a, buttons.b, buttons.c].forEach(function (btn, idx) {
    btn.setAttribute("class", "hidden");
  });

  // TODO: Update the text to say, "your score was X"
  text.heading.textContent = "The Quiz is Now Over";
  text.subheading.setAttribute("class", "hidden");
  buttons.results.setAttribute("class", "show");
  buttons.results.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "./winnerScreen.html";
  });

  let savedScoreboard = localStorage.getItem("quizScoreboard");

  if (savedScoreboard) {
    savedScoreboard = JSON.parse(savedScoreboard);
    const scores = scoreboardEntries.map((entry) => entry.score);
    const newScoreIdx = getSortedIndex(scores, score);

    if (newScoreIdx > 9) {
      console.log(text.initials.classList);
      const newScoreboard = savedScoreboard.slice(newScoreIdx, 0, {
        initials: "",
        score,
      });
      localStorage.setItem("quizScoreboard", newScoreboard);
      // show initials entry box & submit button
      // add and event listener to the submit button
      // in that event listener,
      // const newScoreboard = savedScoreboard.slice(newScoreIdx, 0, { initials: '', score })
    }

    const newScores = scoreboardEntries.slice(newScoreIdx, 0, {
      initials: "",
      score,
    });
  }
}

function tick() {
  timeLeft--;

  if (timeLeft > 1) {
    text.timer.textContent = timeLeft + " seconds remaining";
  } else if (timeLeft === 1) {
    text.timer.textContent = timeLeft + " second remaining";
  } else {
    text.timer.textContent = "0";
    endGame();
  }
}

function getNextQuestion() {
  const currentQ = questionSet[questionIdx];
  text.heading.textContent = currentQ.question;

  [buttons.a, buttons.b, buttons.c].forEach(function (btn, idx) {
    btn.textContent = currentQ.answers[idx].text;
  });
}

function getSortedIndex(arr, value) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (arr[mid] < value) low = mid + 1;
    else high = mid;
  }

  return low;
}

startGame();

// function quizHandlerStart() {
//   var intID = setInterval(function () {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = '0';
//       // Use `clearInterval()` to stop the timer
//       clearInterval(intID);
//       losses++;
//       gameOver = 'true';
//       console.log('times up');
//       addEndBtn();
//     }
//   }, 1000);
//   getQuestion();
// }

// function getQuestion() {
//   q.innerText = questionSet[n].question;
//   a.textContent = questionSet[n].answers[0].text;
//   b.innerText = questionSet[n].answers[1].text;
//   c.innerText = questionSet[n].answers[2].text;
//   startButton.setAttribute('class', 'hidden');
// }

// document.addEventListener('click', function (e) {
//   console.log('callback');
//   if (e.target.matches('.choice')) {
//     if (e.target.dataset.isCorrect === 'true' && n < 4) {
//       score += 1;
//       n++;
//       getQuestion();
//     } else if (e.target.dataset.isCorrect === 'true' && n == 4) {
//       score += 1;
//       gameOver = 'true';
//       addEndBtn();
//     } else {
//       timeLeft -= 5;
//     }
//   }

//   if (score == 5) {
//     gameOver = 'true';
//     a.setAttribute('class', 'hidden');
//     b.setAttribute('class', 'hidden');
//     c.setAttribute('class', 'hidden');
//   }
// });

// function addEndBtn() {
//   var initialInput = document.getElementById('initials');
//   initialInput.setAttribute('class', 'show');
//   resultButton.classList.remove('hidden');
// }

// function startGame() {
//   resultButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     var initialInput = document.getElementById('initials').value;
//     window.location.href = './winnerScreen.html';
//     var scoreArea = document.getElementById('scoreboard');

//     const leaderboard = [
//       {
//         initials: 'DL',
//         score: 5,
//       },
//       {
//         initials: 'bmh',
//         score: 4,
//       },
//       {
//         initials: 'DL',
//         score: 3,
//       },
//     ];

//     // save to local storage
//     window.localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));

//     // read from local storage
//   });
// }
