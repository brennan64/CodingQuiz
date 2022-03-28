const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const q = document.querySelector('h1');
const subQ = document.querySelector('.sub-heading-text');
const answers = document.querySelectorAll('h2');
var n = 0;
const startButton = document.querySelector('#start-quiz');
var timeLeft = 10;
var correctList = [1, 2, 1, 1,2];
startButton.addEventListener('click', quizHandlerStart);




function quizHandlerStart () {
    getQuestion() ;
  answerCheck ();


   
    }; 

    function getQuestion () {
        q.innerText = questionSet[n].question;
    
        subQ.innerText = "click your answer, wrong answers will remove time from the timer.";
         
        a.textContent = questionSet[n].answers[0].text;
        
         b.innerText = questionSet[n].answers[1].text;
        
        c.innerText = questionSet[n].answers[2].text;
        
        startButton.setAttribute('class', 'hidden');

        answers[correctList[n]].addEventListener ("click", answerCheck);


    }

    function answerCheck () {

    }
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