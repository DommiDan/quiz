// var myString = "Hello"
// var myNum = 23,
// var myBoolean = true;

//length tells how long the array is in console.log, also if you want to look at a specific array do console.log(myArray[1]);

//var myQuestions = ["Commonly used data types DO NOT include:", "how do you spell?", "What is babas?", "Um questions", "Another Question"]
//var myChoices = ["strings", "booleans", "alerts", "numbers"]
//var myChoices1 = ["bee", "beees", "b", "bananas"]
//var myChoices2 = ["a", "b", "c", "d"]
//var myChoices3 = ["e", "f", "g", "h"]
//var myChoices4 = ["i", "j", "k", "l"]
//var myAnswers = ["alerts", "bee", "c", "e", "i"]


var myQuest = [];
console.log(myQuest);
var timeLeft = 75;

var targetDiv = document.getElementById("quizwork");
var timerDiv = document.querySelector("#time");

var setIntervalid;
var index = 0;
var highscore = document.querySelector("#highscore");


highscore.textContent = localStorage.getItem("topscore")
targetDiv.textContent = myQuest[index++]

var startTime = function () {
  setIntervalid = setInterval(countDown, 1000)
}

var countDown = function () {
  timeLeft = timeLeft - 1
  if (timeLeft % 15 === 0) {
    //every 15 seconds change your  question
     targetDiv.textContent = myQuest[index++]
   
  }
  if (timeLeft === 0) {
 
    localStorage.setItem("topscore",0) 
    highscore.textContent =  localStorage.getItem("topscore")
    timeLeft = 75
    index = 0

  }

  timerDiv.textContent = timeLeft
}
startTime();


document.getElementById("q1").addEventListener("click", button1);

function button1() {
  
  if(document.getElementById("q1").innerHTML === questions[0].answer) {
    alert("correct");
  }
  else { 
    alert("incorrect");
  }
}
//
document.getElementById("q2").addEventListener("click", button2);

function button2() {

  if(document.getElementById("q2").innerHTML === questions[1].answer) {
    alert("correct");
  }
  else { 
    alert("incorrect");
  }
}
//
document.getElementById("q3").addEventListener("click", button3);

function button3() {

  if(document.getElementById("q3").innerHTML === questions[2].answer) {
    alert("correct");
  }
  else { 
    alert("incorrect");
  }
}
//
document.getElementById("q4").addEventListener("click", button4);

function button4() {

  if(document.getElementById("q4").innerHTML === questions[3].answer) {
    alert("correct");
  }
  else { 
    alert("incorrect");
  }
}

function getQuest() {

  document.getElementById("quest").innerHTML = questions[0].title;
  console.log("quest")
  document.getElementById("q1").innerHTML = questions[0].choices[0];
  document.getElementById("q2").innerHTML = questions[0].choices[1];
  document.getElementById("q3").innerHTML = questions[0].choices[2];
  document.getElementById("q4").innerHTML = questions[0].choices[3];
  document.getElementById("ans").innerHTML = questions[0].answer;
}


console.log(getQuest)








// for ( interator ; condition ; incrementer )
//for ( var i = 0 ; i < myQuestions.length; i = i + 1) {
//console.log(myQuestions[i] + myAnswers[i]);
// }
// if ( title === answer ) {
// alert ("true");
//}
//else {
// alert("false")
//}



//document.getElementById("true").innerHTML = "True";



//else false