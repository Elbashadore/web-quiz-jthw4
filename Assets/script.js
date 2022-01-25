// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score



// variables 

var button = document.getElementById("startGame");
var timerEl = document.getElementById("timer");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");
var sb = document.getElementById("scoreboard");
var choiceArray = ["","","","blue","orange","lime","","","2022","","","","","","denver","","","","","orange"];
var timeLeft = 30;
// functions 

question1.addEventListener("submit", nq1);
question2.addEventListener("submit", nq2);
question3.addEventListener("submit", nq3);
question4.addEventListener("submit", nq4);
question5.addEventListener("submit", nq5);


// initialize function

function init (){
    question1.style.visibility = "hidden";
    question2.style.visibility = "hidden";
    question3.style.visibility = "hidden";
    question4.style.visibility = "hidden";
    question5.style.visibility = "hidden";
    sb.style.visibility = "hidden";
    
}

// next question function 

function nq1 (event){
    question1.style.visibility = "hidden";
    question2.style.visibility = "visible";
   event.preventDefault();
  //  alert(question1[3].value)
  answer();
} 

function nq2 (event){
    question2.style.visibility = "hidden";
    question3.style.visibility = "visible";
    event.preventDefault();
    answer();
}

function nq3 (event){
    question3.style.visibility = "hidden";
    question4.style.visibility = "visible";
    event.preventDefault();
    answer();
}

function nq4 (event){
    question4.style.visibility = "hidden";
    question5.style.visibility = "visible";
    event.preventDefault();
    answer();
}

function nq5 (event){
  event.preventDefault();
  answer();
  question5.style.visibility = "hidden";
  scoreboard();
}

// answer function 

function answer(choice){
  var answer = document.getElementsByTagName("input");

  for(i = 0; i < answer.length; i++){
    if (answer[i].type="radio"){

      if(answer[i].checked){
          a = answer[i].value;
          // alert(a);
          // x = i;
          // alert(x);
          if (a !== choiceArray[i]){
            // console.log(timeLeft);
            timeLeft -= 5;
            // console.log(timeLeft);
          }
      }
    }
  }
}



// quiz start function 

function quizStart () {
    question1.style.visibility = "visible";
}



// timer function
function timerStart() {
    button.style.visibility = "hidden";

  
    var timeInterval = setInterval(function () {
      if (timeLeft >= 1) {
        timerEl.textContent = timeLeft + " Seconds Left";
        timeLeft--;
      }
      else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        scoreboard();
      }
    }, 1000);
  }


  // scorboard function 

  function scoreboard (){
    sb.style.visibility = "visible";
    document.querySelector("p").textContent = "Enter your initials"
    // console.log("is this working?")
  }


// start game button
startGame = button.addEventListener("click", function () {
    timerStart();
    quizStart ();
  });
  

// calls the page init function 

init ();


