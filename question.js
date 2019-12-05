//function question() {
    var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
      an : "strings",
    },
    
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];
  //score

  var score = 0;

  //loops for questions

  for (var i = 0; i < questions.length ; i = i + 1) {
      // answers to questions
      var answers = confirm(questions[i].title);

      //Sequence
    if ((answers === true && questions[i].answer === "correct") ||
    (answers === false && questions[i].answer === "false")) {
    // add score
    score++;
      alert ("Thats Correct");
  }
  else {
      alert("Nope");
  }
    
  }


//}