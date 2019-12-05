//The first view of the application displays a button that starts the quiz.

//Clicking the start button displays a series of questions.

//Once the quiz begins, a timer starts.

//If a question is answered incorrectly, additional time is subtracted from the timer.

//The timer stops when all questions have been answered or the timer reaches 0.

 //After the game ends, the user can save their initials and score to a highscores view using local storage.

 document.getElementById("demo").addEventListener("click", myFunction);

 function myFunction() {
   document.getElementById("demo").innerHTML = result;
 }
 var demo = "start quiz";
 var result = demo.link("startquiz.html");


var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];