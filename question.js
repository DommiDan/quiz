// var myString = "Hello"
// var myNum = 23,
// var myBoolean = true;

//length tells how long the array is in console.log, also if you want to look at a specific array do console.log(myArray[1]);
var myQuestions = ["Commonly used data types DO NOT include:", "how do you spell?", "What is babas?", "Um questions", "Another Question"]
var myChoices = ["strings", "booleans", "alerts", "numbers"]
var myChoices1 = ["bee", "beees", "b", "bananas"]
var myChoices2 = ["a", "b", "c", "d"]
var myChoices3 = ["e", "f", "g", "h"]
var myChoices4 = ["i", "j", "k", "l"]
var myAnswers = ["alerts", "bee", "c", "e", "i"]

console.log(myQuestions);


//document.getElementById("titles").interHTML = "Commonly used data types DO NOT include:"
//console.log ("Commonly used data types DO NOT include:")

//if click alert then right
var title = "Commonly used data types DO NOT include:";
var answer = "alerts";
var title = answer
var otherChoice = "false"

var timeLeft = 75;

var targetDiv = document.getElementById("quizwork");
var timerDiv = document.querySelector("#time");

// targetDiv.textCtent = "Commonly used data types DO NOT include";
var setIntervalid;
var index = 0;
var highscore = document.querySelector("#highscore");

highscore.textContent = localStorage.getItem("topscore")
targetDiv.textContent = myQuestions[index++]
var startTime = function () {
  setIntervalid = setInterval(countDown, 1000)
}
var countDown = function () {
  timeLeft = timeLeft - 1
  if (timeLeft % 15 === 0) {
    //every 15 seconds change your  question
     targetDiv.textContent = myQuestions[index++]
   
  }
  if (timeLeft === 0) {
 
    localStorage.setItem("topscore",20) 
    highscore.textContent =  localStorage.getItem("topscore")
    timeLeft = 75
    index = 0

  }

  timerDiv.textContent = timeLeft


}
startTime()
//var newDiv = document.createElement("div");
//newDiv.textContent = myChoices;
//targetDiv.appendChild(newDiv);



document.getElementById("q1").addEventListener("click", button1);

function button1() {
  document.getElementById("q1").innerHTML = "false";

}
console.log("false")
//
document.getElementById("q2").addEventListener("click", button2);

function button2() {
  document.getElementById("q2").innerHTML = "false";
}
//
document.getElementById("q3").addEventListener("click", button3);

function button3() {
  document.getElementById("q3").innerHTML = "true";
}
//
document.getElementById("q4").addEventListener("click", button4);

function button4() {
  document.getElementById("q4").innerHTML = "false";
}


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