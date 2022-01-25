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
var scoreSubmit = document.getElementById("scoreboard")
var choiceArray = ["","","","blue","orange","lime","","","2022","","","","","","denver","","","","","orange"];
var timeLeft = 30;
var scoreForm = document.getElementById("scoreForm")
scoreForm.type = "text";
var lb = document.getElementById("leaderBoard");
var timeInterval = time;
var finish = "false";
// functions 

question1.addEventListener("submit", nq1);
question2.addEventListener("submit", nq2);
question3.addEventListener("submit", nq3);
question4.addEventListener("submit", nq4);
question5.addEventListener("submit", nq5);
scoreSubmit.addEventListener("submit",saveScore)


// initialize function

function init (){
    question1.style.visibility = "hidden";
    question2.style.visibility = "hidden";
    question3.style.visibility = "hidden";
    question4.style.visibility = "hidden";
    question5.style.visibility = "hidden";
    sb.style.visibility= "hidden";
    lb.style.visibility= "hidden"
    
}

// next question function 

function nq1 (event){
    question1.style.visibility = "hidden";
    question2.style.visibility = "visible";
    scoreForm.type = "text";
   event.preventDefault();
  //  alert(question1[3].value)
  answer();
} 

function nq2 (event){
    question2.style.visibility = "hidden";
    question3.style.visibility = "visible";
    scoreForm.type = "text";
    event.preventDefault();
    answer();
}

function nq3 (event){
    question3.style.visibility = "hidden";
    question4.style.visibility = "visible";
    scoreForm.type = "text";
    event.preventDefault();
    answer();
}

function nq4 (event){
    question4.style.visibility = "hidden";
    question5.style.visibility = "visible";
    scoreForm.type = "text";
    event.preventDefault();
    answer();
}

function nq5 (event){
  event.preventDefault();
  answer();
  scoreboard();
  clearInterval(time);
  finish = "true"
  question5.style.visibility = "hidden";
}

  // scorboard function 

  function scoreboard (event){
    var prevScore = localStorage.getItem("score");
    document.getElementById("prevScore").textContent = "Past Score: " + prevScore
    document.getElementById("initials").textContent = "Enter your initials"
    var timeScore = timeLeft;
    document.getElementById("time").textContent = "Time Left: " + timeScore;
   timerEl.style.visibility = "hidden"
   timerEl.textContent = "";
   sb.style.visibility = "visible";
  }


  //  saves score to local storage

  function saveScore(event){
    event.preventDefault();
    var timeScore = timeLeft
   lb.style.visibility = "visible";
   sb.style.visibility = "hidden"
  var name = document.getElementById("score").value;
  console.log(name)
  var score = name + "" + timeScore;
  localStorage.setItem("score",score);

  var highScore = localStorage.getItem("score");
  document.getElementById("highScore").textContent = "New Score: " + highScore;


 }
// answer function 

function answer(choice){
  var answer = document.getElementsByClassName("options");

  for(i = 0; i < answer.length; i++){
    if (answer[i].type="radio"){

      if(answer[i].checked){
          a = answer[i].value;
          console.log(a);
          // alert(a);
          // x = i;
          // alert(x);
          if (a !== choiceArray[i]){
            // console.log(timeLeft);
            timeLeft -= 2;
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
        if (finish === "false"){
          timerEl.textContent = "";
          clearInterval(timeInterval);
          scoreboard();
          question1.style.visibility="hidden";
        }
        else {
          timerEl.textContent = "";
          clearInterval(timeInterval);
        }
      }

    }, 1000);
  }





// start game button
startGame = button.addEventListener("click", function () {
    timerStart();
    quizStart ();
  });
  


// calls the page init function 

init ();


