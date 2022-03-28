var a = document.querySelector('#a');
var b = document.querySelector('#b');
var c = document.querySelector('#c');
var q = document.querySelector('h1');
var choice = document.querySelectorAll ('choice');
var subQ = document.querySelector('.sub-heading-text');
var answers = document.querySelector("button-area");
var n = 0;
var startButton = document.querySelector('#start-quiz');
var timeLeft = 50;
var correctList = [1, 2, 1, 1,2];
var timerEl = document.querySelector(".timer")
var score = 0;
var game = 
startButton.addEventListener('click', quizHandlerStart);
function timerStart () {
    intID();
    quizHandlerStart();
}
function quizHandlerStart () {

    getQuestion();
    
    
}

function getQuestion () {
 
        q.innerText = questionSet[n].question;
    
        
         a.textContent = questionSet[n].answers[0].text;
        if (questionSet[n].answers[0].isCorrect){
            a.setAttribute("data-is-correct", "true");
        } else {
            a.setAttribute("data-is-correct", "false");
        }
    
        
         b.innerText = questionSet[n].answers[1].text;
         if (questionSet[n].answers[1].isCorrect){
            b.setAttribute("data-is-correct", "true")
    
        } else {
            b.setAttribute("data-is-correct", "false");
        }

        c.innerText = questionSet[n].answers[2].text;
        if (questionSet[n].answers[2].isCorrect){
            c.setAttribute("data-is-correct", "true")
        } else {
            c.setAttribute("data-is-correct", "false");
        }
     
        startButton.remove();

     

    }

    document.addEventListener ("click", function (e) {
        if(e.target.matches(".choice")){
            console.log(e.target);

            if (e.target.dataset.isCorrect === "true") {
                score +=1;
                n++;
                getQuestion();
                if (score == 5){
                    console.log('you win');
                }

            } else {
                timeLeft -=5;
    
            }
        }
    });

    var intID = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = timeLeft + ' seconds remaining';
          // Decrement `timeLeft` by 1
          timeLeft--;
        } else if (timeLeft === 1) {
          // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          // Once `timeLeft` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = '0';
          // Use `clearInterval()` to stop the timer
          clearInterval(intID);
          // Call the `displayMessage()` function
          displayMessage();
        }
      }, 1000);
    
  
function displayMessage () {

}


    // function answerCheck () {

    // }
    // function secondQ () {
       
    //    n+=1;
       
    //    q.innerText = questionSet[n].question;
    //     subQ.innerText = "click your answer, wrong answers will remove time from the timer.";
         
    //     a.textContent = questionSet[n].answers[0].text;
       
        
    //      b.innerText = questionSet[n].answers[1].text;
        
    //     c.innerText = questionSet[n].answers[2].text;
        
    //     startButton.setAttribute('class', 'hidden');

        
    // }


    // function setWins () {
    //     localStorage.setItem( );
    // }
    
    // function setLosses () {
    //     localStorage.setItem()
    // }