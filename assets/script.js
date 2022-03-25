var start = document.getElementById("start");
var a = document.getElementById("a");
var b = document.getElementById("b");
var questions = ["what do people mean when they say camelcase?", "what must separate all items in an object?"];
   var answers = ["a big box of cigarettes", " a suitcase for a desert animal", "a way of font styling", "$$$", "^", "!"];
  var corrects = ["capitalizing Every Word After The First In Js To Make Reading Long Vars Easier", "a comma"];


 start.addEventListener('click', startQuiz);

 function startQuiz () {
     a.textContent = corrects[0];
     b.textContent = answers[1];


 }