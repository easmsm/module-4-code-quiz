//note: I know this is more cluttered than it should be, but I realized I was making things too complicated and basically started over
//I'm keeping some of the old logic to come back and look at at a later time, for another use case

// -----------------------------variables------------------------------------------------- 
var questions = import("./questions");


var currentQuestionIndex = 0;
var time = questions.length * 15;
// var timerId;

var timeEl = document.querySelector("#timer");
var startBtn = document.querySelector("#startButton");
var submitBtn = document.querySelector("#submit-button");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#highScore-section");
var highScoreDisplay = document.querySelector("#highScore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");

//------------------quiz-------------------------------

//start
function startQuiz() {
    titleScreen.setAttribute("class", "hide");
    quizScreen.setAttribute("class", "show");
  
    // timer
     // start timer
     timerId = setInterval(startTime, 1000);
  
     // show starting time
     timeEl.textContent = time;
   
     getQuestion();
  }

  function startTime() {
    time--;
    timeEl.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }

  function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
  
    // reset
    var titleScreen = document.getElementById("title-section");
    titleScreen.textContent = currentQuestion.title;
  
    choicesEl.innerHTML = "";
  
    currentQuestion.choices.forEach(function(choice, i) {
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
      choiceNode.onclick = questionStart;
      choicesEl.appendChild(choiceNode);
    });
  }

  // something isn't working here --
  function questionStart() {
    if (this.value !== questions[currentQuestionIndex].answer) {
      time -= 15;
      if (time < 0) {
        time = 0;
      }
      timeEl.textContent = time;
      feedbackEl.textContent = "Wrong!";
    } else {

      feedbackEl.textContent = "Correct!";
    }
      feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }


// end the quiz 
  function quizEnd() {
    clearInterval(timerId);
  
    var highScoreSectionEl = document.querySelector("#highScore-section");
    highScoreSectionEl.setAttribute("class", "show");
  
    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = time;
  
    quizScreen.setAttribute("class", "hide");
  }

// save high score
// something isn't working here 
function saveHighScore() {
    var initials = initialsEl.value.trim();
  
    if (initials !== "") {
      var highScores =
        JSON.parse(window.localStorage.getItem("highScores")) || [];
  
      var newScore = {
        score: time,
        initials: initials
      };
  
      highScores.push(newScore);
      window.localStorage.setItem("highScores", JSON.stringify(highScores));
  
      window.location.href = "highscores.html";
          // function toHighScores() {
          //     window.location.assign("./highscores.html")
          // }

    }
  }

  function checkForEnter(event) {
    if (event.key === "Enter") {
      saveHighScore();
    }
  }
  
  //submit initials and save high score
  // works
  submitBtn.onclick = saveHighScore;
  
  //start quiz
  // works
  startBtn.onclick = startQuiz;
  
  initialsEl.onkeyup = checkForEnter;




//questions and answers
//leaving this in because I would like to come back to this logic in the future
// var questionDisplay = { 
//     correct: { 
//         0 : "What number is used for the first position in an array",
//         1 : "Which of the following is not a programming language?",
//         2 : "Where do you link your JavaScript on your HTML file?", 
//         3 : "What are variables?", 
//         4 : "Which of the following is an example of a string?"
//     }
// };

// //All answers
// var answersDisplay = { 
//     answers: { 
//         0 : {
//             0: "0",
//             1: "1",
//             2: "2",
//             3: "None of the Above"},
//         1 : {
//             0: "Java",
//             1: "Jaba",
//             2: "JavaScript",
//             3: "Python"},
//         2 : { 
//             0: "In the header",
//             1: "In the footer",
//             2: "At the bottom of the file, right before the close of the body tag", 
//             3: "At the top of the file, after the html language is designated"},      
//         3 : { 
//             0: "Placeholders for numbers",
//             1: "Where deleted information is stored",
//             2: "Text input spaces for end users", 
//             3: "Where information is stored"},      
//         4 : { 
//             0: "Hello",
//             1: "'Where's Waldo?'",
//             2: "!Hello",
//             3: "!Where's Waldo?"},  
//     }
// };

        //keeping one as an example to come back to if I revisit the original logic plan
        // answerOption1Btn.addEventListener("click", function() {

        //     if (questionDisplay.textContent === "What number is used for the first position in an array" && answerOption1Btn.textContent === "0") {
        //         console.log("Correct");
        //         questionNumber = 2; 
        //         answerNumber = 4;

        //         answerRightWrong.style.display="";
        //         answerRightWrong.textContent = "Yes!";
        //         answerRightWrongGrid.appendChild(answerRightWrong);
        //     } else {
        //         switch(answerOption1Btn.textContent) {
        //             case "1":
        //                 answerRightWrong.style.display="";
        //                 answerRightWrong.textContent = "Nope!";

        //                 //set the score, question number and answer number (so the quiz isn't in the same order every time)
        //                 score = 1;
        //                 questionNumber = 1;
        //                 answerNumber = 1;
                        
        //             case "2":
        //                 answerRightWrong.style.display="";
        //                 answerRightWrong.textContent = "Nope!";
                        
        //                 score = 1; 
        //                 questionNumber = 3;
        //                 answerNumber = 2;
                    
        //             case "None of the Above":
        //                 answerRightWrong.style.display="";
        //                 answerRightWrong.textContent = "Nope!";
                        
        //                 score = 1; 
        //                 questionNumber = 4;
        //                 answerNumber = 3;
                    
        //                 //game over, back to question and answer 0
        //                 questionNumber = 0; 
        //                 answerNumber = 0; 
                        
        //                 answerOption1Btn.style.display = 'none';
        //                 answerOption2Btn.style.display = 'none';
        //                 answerOption3Btn.style.display = 'none';
        //                 answerOption4Btn.style.display = 'none';
        //                 answerRightWrong.style.display='none'; 
        //                 startQuizBtn.style.display = 'none'; 

        //                 questionDisplay.textContent = "I think we're done here!";
        //                 finalScore.style.display = ""; 
        //                 enterInitialsPrompt.style.display = ""; 
        //                 enterInitialsHere.style.display=""; 
        //                 finalAnswerCheck = 1; 

        //                 lastQuestionWrong();

        //                 finalScore.textContent = "Your final score is: " + highScore;
        //                 submitScore.style.display = "";
        //                 submitScore.textContent = "Submit";                   
                        
        //                 //Exit
        //                 clearInterval(timeInterval); 
        //         }
        //     }
        // });

