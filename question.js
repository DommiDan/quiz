// var myString = "Hello"
// var myNum = 23,
// var myBoolean = true;

//length tells how long the array is in console.log, also if you want to look at a specific array do console.log(myArray[1]);
var choicess = [
    "strings",
    "butter" ,
    "alerts",
    "num"
];

var myQuest = ["Commonly used data types DO NOT include:", "how do you spell?", "What is babas?", "Um questions", "Another Question"]



//console.log(myQuest);
console.log(myQuest)


//var targetDiv = document.getElementById("quest");
//targetDiv.textContent = choicess;
//var targetDiv = document.getElementById("quizwork");
//var timerDiv = document.querySelector("#time");

//var setIntervalid;
//var index = 0;


var setIntervalid;
var index = 0;
var timeLeft = 75;
var targetDiv = document.getElementById("q1");
targetDiv.textContent = choicess[index];
var timerDiv = document.querySelector("#time");



var startTime = function () {
  setIntervalid = setInterval(countDown, 1000)
}


var countDown = function () {
  timeLeft = timeLeft - 1
  if (timeLeft % 15 === 0) {
    //every 15 seconds change your question
     targetDiv.textContent = choicess[index++]
   
  }
  timerDiv.textContent = timeLeft
}



///
var timeLeft = 75;
var targetDiv = document.getElementById("quest");
targetDiv.textContent = myQuest;
//var targetDiv = document.getElementById("quizwork");
var timerDiv = document.querySelector("#time");

var setIntervalid;
var index = 0;
var highscore = document.querySelector("#highscore");


  //console.log(myQuestions[i] + myAnswers[i]);
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

//





//
document.getElementById("q1").addEventListener("click", button1);

function button1() {

  if(document.getElementById("q1").innerHTML === choicess[0].answer) {
    alert("correct");
  }
  else { 
    timeLeft % 15 === 0
    alert("incorrect");
  }
}
//
document.getElementById("q2").addEventListener("click", button2);

function button2() {

  if(document.getElementById("q2").innerHTML === choicess[1].answer) {
    alert("correct");
  }
  else { 
    timeLeft % 15 === 0
    alert("incorrect");
  }
}
//
document.getElementById("q3").addEventListener("click", button3);

function button3() {

  if(document.getElementById("q3").innerHTML === choicess[2].answer) {
    alert("correct");
  }
  else { 
    timeLeft % 15 === 0
    alert("incorrect");
  }
}
//
document.getElementById("q4").addEventListener("click", button4);

function button4() {

  if(document.getElementById("q4").innerHTML === choicess[3].answer) {
    alert("correct");
  }
  else { 
    timeLeft % 15 === 0
    alert("incorrect");
  }
}

//function getQuest() {

  //document.getElementById("quest").innerHTML = choice[0].title;
  console.log("quest")
  //document.getElementById("q1").innerHTML = choice[0].c[0];
  //document.getElementById("q2").innerHTML = choice[0].c[1];
  //document.getElementById("q3").innerHTML = choice[0].c[2];
  //document.getElementById("q4").innerHTML = choice[0].c[3];
  //document.getElementById("ans").innerHTML = choice[0].answer;
//}

//console.log(getQuest)


//for ( interator ; condition ; incrementer )
//for ( var i = 0 ; i < myQuest.length; i = i + 1) {
 //}
// if ( title === answer ) {
// alert ("true");
//}
//else {
// alert("false")
//}

//console.log(choicess)
//for ( var i = 0 ; i < choicess.length; i = i + 1) {
//}
//document.getElementById("true").innerHTML = "True";



//else false