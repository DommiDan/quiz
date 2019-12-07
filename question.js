
    // var myString = "Hello"
    // var myNum = 23,
    // var myBoolean = true;

    //length tells how long the array is in console.log, also if you want to look at a specific array do console.log(myArray[1]);
    var myQuestions = [ "Commonly used data types DO NOT include:"]
    var myChoices = ["strings", "booleans", "alerts", "numbers"]
    var myAnswers = ["alerts"]

    console.log(myQuestions);


//document.getElementById("titles").interHTML = "Commonly used data types DO NOT include:"
//console.log ("Commonly used data types DO NOT include:")

//if click alert then right
var title = "Commonly used data types DO NOT include:";
var answer = "alerts";
var title = answer
var otherChoice = "false"
// for ( interator ; condition ; incrementer )
  for ( var i = 0 ; i < myQuestions.length; i = i + 1) {
    console.log(myQuestions[i] + myAnswers[i]);
  }
   if ( title === answer ) {
    alert ("true");
  }
    else {
      alert("false")
    }


      //document.getElementById("true").innerHTML = "True";


 
//else false
