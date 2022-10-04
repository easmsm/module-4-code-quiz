// -----------------------------variables------------------------------------------------- 

//variables for timer/score keeping
var score = 0; 
var highScore = 50; 
var checkTimes = 1 
var htmlTimeLeft = document.getElementById('timeLeft');
var enterInitialsPrompt = document.createElement("enterInitialsPrompt"); 
var enterInitialsHere = document.createElement("enterInitialsHere"); 
var timeLeft = 60;

//answer buttons
var answerOption1Btn = document.getElementById('answeroption1'); 
var answerOption2Btn = document.getElementById('answeroption2');
var answerOption3Btn = document.getElementById('answeroption3'); 
var answerOption4Btn = document.getElementById('answeroption4');

//question and answer variables
var quizStatus = true; 
var questionNumber = 0; 
var answerNumber = 0; 
var finalAnswerCheck = 0  
var questionsDisplay = document.getElementById('questions'); 

//header variables
var viewScoresBtn = document.getElementById('viewScores');

//quiz body structure/other variables
var startQuizBtn = document.getElementById('startQuiz');
var submitScore = document.getElementById('submitScore'); 
var mainDiv = document.getElementById('main'); 

var answerRightWrong = document.getElementById('answerRightWrong'); 
var questionHere = document.createElement("questionHere"); 
var finalScore = document.createElement("finalScore"); 
var gridContainer = document.getElementById("gridContainer");


//------------------quiz-------------------------------

//clear out old information "Reset", won't show answer options before questions are populated
answerOption1Btn.style.display = 'none';
answerOption2Btn.style.display = 'none';
answerOption3Btn.style.display = 'none';
answerOption4Btn.style.display = 'none';
submitScore.style.display = 'none';
answerRightWrong.style.display='none';
enterInitialsHere.style.display='none';

//questions and answers

var questionDisplay = { 
    correct: { 
        0 : "What number is used for the first position in an array",
        1 : "Which of the following is not a programming language?",
        2 : "Where do you link your JavaScript on your HTML file?", 
        3 : "What are variables?", 
        4 : "Which of the following is an example of a string?"
    }
};

//All answers
var answersDisplay = { 
    answers: { 
        0 : {
            0: "0",
            1: "1",
            2: "2",
            3: "None of the Above"},
        1 : {
            0: "Java",
            1: "Jaba",
            2: "JavaScript",
            3: "Python"},
        2 : { 
            0: "In the header",
            1: "In the footer",
            2: "At the bottom of the file, right before the close of the body tag", 
            3: "At the top of the file, after the html language is designated"},      
        3 : { 
            0: "Placeholders for numbers",
            1: "Where deleted information is stored",
            2: "Text input spaces for end users", 
            3: "Where information is stored"},      
        4 : { 
            0: "Hello",
            1: "'Where's Waldo?'",
            2: "!Hello",
            3: "!Where's Waldo?"},  
    }
};

//end questions and answers section

//answer variables that will be attached to each question

//timer, stores score in local storage
// htmlTimeLeft.textContent = timeLeft;

viewScoresBtn.addEventListener("click", function() {

    var quizUsers = "";
    var substringTest ="";
    var highScores = "";

    for (var i=0; i < localStorage.length; i++) {
        var checkUserValue = [];
        
        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0,4) 
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
       }
    }
    window.alert(highScores);

});

//submit scores at the end of the quiz, more local storage
submitScore.addEventListener("click", function() {
    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];
    
    //this is how the initials plus the high score will be listed in the array of high scores on the local storage
    quizUserDetails = quizLocalStorage + enterInitialsHere.value 
    value = [quizUserDetails,highScore] 

    //checking to see if the user already exists, or making a new user
    if (!localStorage.length) {
        localStorage.setItem("test","test");
    }
       
    for (var i=0; i < localStorage.length; i++){
        var checkUser = "";
        var checkUserValue = [];

        quizUserDetails = quizLocalStorage + enterInitialsHere.value;

        checkUser = localStorage.getItem(quizUserDetails);
   
        if (checkUser == null) { 
            localStorage.setItem(quizUserDetails, value); 
            window.alert("That's a great score of" + highScore + ", we'll take that!")
        } else if (checkUser != null){
            checkUserValue = checkUser.split(",");
        }  
       
        if (quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1] ) {
            localStorage.setItem(quizUserDetails, value); 
            window.alert(highScore + " " + "is the latest score from our return customer " + enterInitialsHere.value + ". Trying to prove something, now?")
        } else if (enterInitialsHere.value == "") {
            window.alert("We need your initials, love!");
        } else {
            localStorage.setItem(quizUserDetails, value);
            window.alert("We've got your score of " + highScore + " and we're keeping it!");
        }          
    }  
});

//button displays

answerOption1Btn.addEventListener("mouseover", function() {
    answerRightWrong.style.display='none';
});

answerOption2Btn.addEventListener("mouseover", function() {
    answerRightWrong.style.display='none';
});

answerOption3Btn.addEventListener("mouseover", function() {
    answerRightWrong.style.display='none';
});

answerOption4Btn.addEventListener("mouseover", function() {
    answerRightWrong.style.display='none';
});

submitScore.addEventListener("mouseover", function() {
    answerRightWrong.style.display='none';
});

startQuizBtn.addEventListener("click", function() {
});


//here is where the questions and answers will be populated, cycled through, and checked. I'm not sure how to consolidate this code without making all the answers the same place in the answer arrays, but I hope to address this in future versions of this game

//using 0 true or 1 false from correct and incorrect answers, removing 1 point of time for each incorrect answer
var timeInterval = setInterval(function() {
        if (score === 1){
        highScore -= 10;
    }
    score = 0;

    
    if(timeLeft >= 1 && finalAnswerCheck !== 1) {
        // questionsDisplay.textContent = questionHere.correct[questionNumber];
        
        questionHere.style.display= ""; 
        answerOption1Btn.style.display = "";
        answerOption2Btn.style.display = "";
        answerOption3Btn.style.display = "";
        answerOption4Btn.style.display = "";

        answerOption1Btn.textContent = answersDisplay.answers[answerNumber][0];
        answerOption2Btn.textContent = answersDisplay.answers[answerNumber][1];
        answerOption3Btn.textContent = answersDisplay.answers[answerNumber][2];
        answerOption4Btn.textContent = answersDisplay.answers[answerNumber][3];
       
        // gridContainer.appendChild(questionsDisplay);
        // gridContainer.appendChild(answerOption1Btn);
        // gridContainer.appendChild(finalScore);
        // timeLeft -= 1;
        // htmlTimeLeft.textContent = timeLeft;
        
        //correct and incorrect answers to each question
        answerOption1Btn.addEventListener("click", function() {

            if (questionDisplay.textContent === "What number is used for the first position in an array" && answerOption1Btn.textContent === "0") {
                console.log("Correct");
                questionNumber = 2; 
                answerNumber = 4;

                answerRightWrong.style.display="";
                answerRightWrong.textContent = "Yes!";
                answerRightWrongGrid.appendChild(answerRightWrong);
            } else {
                switch(answerOption1Btn.textContent) {
                    case "1":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";

                        //set the score, question number and answer number (so the quiz isn't in the same order every time)
                        score = 1;
                        questionNumber = 1;
                        answerNumber = 1;
                        
                    case "2":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";
                        
                        score = 1; 
                        questionNumber = 3;
                        answerNumber = 2;
                    
                    case "None of the Above":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";
                        
                        score = 1; 
                        questionNumber = 4;
                        answerNumber = 3;
                    
                        //game over, back to question and answer 0
                        questionNumber = 0; 
                        answerNumber = 0; 
                        
                        answerOption1Btn.style.display = 'none';
                        answerOption2Btn.style.display = 'none';
                        answerOption3Btn.style.display = 'none';
                        answerOption4Btn.style.display = 'none';
                        answerRightWrong.style.display='none'; 
                        startQuizBtn.style.display = 'none'; 

                        questionDisplay.textContent = "I think we're done here!";
                        finalScore.style.display = ""; 
                        enterInitialsPrompt.style.display = ""; 
                        enterInitialsHere.style.display=""; 
                        finalAnswerCheck = 1; 

                        lastQuestionWrong();

                        finalScore.textContent = "Your final score is: " + highScore;
                        submitScore.style.display = "";
                        submitScore.textContent = "Submit";                   
                        
                        //Exit
                        clearInterval(timeInterval); 
                }
            }
        });

        answerOption2Btn.addEventListener("click", function() {

            if (questionDisplay.textContent === "Which of the following is not a programming language?" && answerOption2Btn.textContent === "Jaba") {
                answerRightWrong.style.display=""; 
                answerRightWrong.textContent = "Correct!";
                answerRightWrongGrid.appendChild(answerRightWrong);
                
                //Game Over
                questionNumber = 0;
                answerNumber = 0;

                answer1BtnEl.style.display = 'none';
                answer2BtnEl.style.display = 'none';
                answer3BtnEl.style.display = 'none';
                answer4BtnEl.style.display = 'none';
                answerRightWrong.style.display='none'; 
                startQuizBtn.style.display = 'none'; 

                questionDisplay.textContent = "I think we're done here!";
                finalScore.style.display = ""; 
                enterInitialsPrompt.style.display = ""; 
                enterInitialsHere.style.display=""; 
                finalScore.textContent = "Your final score is: " + highScore; 
                enterInitialsPrompt.textContent = "Enter initials: "
                submitScore.style.display = "";
                submitScore.textContent = "Submit"; 

                //Exit
                clearInterval(timeInterval);
            } else {
                switch(answer2BtnEl.textContent) {
                    case "Java":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";
                      
                        score = 1; 
                        questionNumber = 1; 
                        answerNumber = 1;
                        
                    case "JavaScript":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";
                     
                        score = 1; 
                        questionNumber = 2; 
                        answerNumber = 4;
                        console.log(score);
                        
                    case "Python":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";

                        score = 1; 
                        questionNumber = 3; 
                        answerNumber = 2;      
                }
             }    
        });

        answerOption3Btn.addEventListener("click", function() {

            if (questionDisplay.textContent === "Where do you link your JavaScript on your HTML file?" && answer3BtnEl.textContent === "At the bottom of the file, right before the close of the body tag") {
                questionNumber = 1; 
                answerNumber = 1;

                answerRightWrong.style.display="";
                answerRightWrong.textContent = "Yes!";
                answerRightWrongGrid.appendChild(answerRightWrong);
            }
            else {
                switch(answerOption3Btn.textContent) {
                    case "In the header":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";
                        score = 1; 
                        questionNumber = 3;
                        answerNumber = 2;
                    
                    case "In the footer":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";
                        score = 1; 
                        questionNumber = 3;
                        answerNumber = 2;

                    case "At the top of the file, after the html language is designated":
                        score = 1; 
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";
                        questionNumber = 0; 
                        answerNumber = 0; 

                        answerOption1Btn.style.display = 'none';
                        answerOption2Btn.style.display = 'none';
                        answerOption3Btn.style.display = 'none';
                        answerOption4Btn.style.display = 'none';
                        answerRightWrong.style.display='none'; 

                        startQuizBtn.style.display = 'none'; 
                        questionDisplay.textContent = "You have finished the quiz!";
                        finalScore.style.display = ""; 
                        enterInitialsPrompt.style.display = ""; 
                        enterInitialsHere.style.display=""; 
                        finalAnswerCheck = 1;

                        lastQuestionWrong();

                        finalScore.textContent = "Your final score is: " + highScore;
                        enterInitialsPrompt.textContent = "Enter initials: "
                        submitScore.style.display = "";
                        submitScore.textContent = "Submit";  

                        //Exit
                        clearInterval(timeInterval);
                }
            }
        });

        answerOption4Btn.addEventListener("click", function() {

            if (questionDisplay.textContent === "What are variables?" && answer4BtnEl.textContent === "Where information is stored") {
                questionNumber = 3;
                answerNumber = 2;
                answerRightWrong.style.display=""; 
                answerRightWrong.textContent = "Nice!"
                answerRightWrongGrid.appendChild(answerRightWrong);
            } else {
                switch(answer4BtnEl.textContent) {
                    case "Placeholders for numbers":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";

                        score = 1; 
                        questionNumber = 1; 
                        answerNumber = 1;
                    
                    case "Where deleted information is stored":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";

                        score = 1; 
                        questionNumber = 2;
                        answerNumber = 4;
                   
                    case "Text input spaces for end users":
                        answerRightWrong.style.display="";
                        answerRightWrong.textContent = "Nope!";

                        score = 1; 
                        questionNumber = 4; 
                        answerNumber = 3;
                 

                        answerOption1Btn.style.display = 'none';
                        answerOption2Btn.style.display = 'none';
                        answerOption3Btn.style.display = 'none';
                        answerOption4Btn.style.display = 'none';
                        answerRightWrong.style.display='none'; 
                        startQuizBtn.style.display = 'none'; 
                        questionDisplay.textContent = "I think we're done here!";
                        finalScore.style.display = ""; 
                        enterInitialsPrompt.style.display = ""; 
                        enterInitialsHere.style.display="";  
                        finalAnswerCheck = 1; 

                        lastQuestionWrong();

                        finalScore.textContent = "Your final score is: " + highScore; 
                        enterInitialsPrompt.textContent = "Enter initials: "
                        submitScore.style.display = "";
                        submitScore.textContent = "Submit";   
                                        
                        //Exit
                        clearInterval(timeInterval);     
                }     
            }    
        });
    }
    else if(timeLeft === 0){
      questionNumber = 0; 
      answerNumber = 0;

      answerOption1Btn.style.display = 'none';
      answerOption2Btn.style.display = 'none';
      answerOption3Btn.style.display = 'none';
      answerOption4Btn.style.display = 'none';
      answerRightWrong.style.display='none';
      questionDisplay.textContent = "Game Over!";
      startQuizBtn.style.display = "";
      clearInterval(timeInterval);
    }
  }, 1000)

function lastQuestionWrong () {
    if (finalAnswerCheck === 1 && checkTimes === 1) {
    highScore -= 10;
    checkTimes = 2;
    return highScore
}

}
