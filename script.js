// variables 

//variables for timer/score keeping
var score = 0; // Max value by decreasing each wrong answer 
var highScore = 50; // highest possible score with the number of questions I'll be adding
var checkTimes = 1 //  last question check
var htmlTimeLeft = document.getElementById('timeLeft');
var enterInitialsPrompt = document.createElement("enterInitialsPrompt"); 
var enterInitialsHere = document.createElement("enterInitialsHere"); 

//answer buttons
var answerOption1Btn = document.getElementById('answeroption1'); 
var answerOption2Btn = document.getElementById('answeroption2');
var answerOption3Btn = document.getElementById('answeroption3'); 
var answerOption4Btn = document.getElementById('answeroption4');

//question and answer variables
var quizStatus = true; // Know the status of the quiz. Quiz is not running = false , running = true
var questionNumber = 0; 
var answerNumber = 0; 
var finalAnswerCheck = 0  
var questionsEl = document.getElementById('questions'); 

//header variables
var viewScoresBtn = document.getElementById('viewScores');

//quiz body structure/other variables
var startQuizBtn = document.getElementById('startQuiz');
var submitScore = document.getElementById('submitScore'); 
var mainDiv = document.getElementById('main'); 
// Display counter 
var answerRightWrong = document.getElementById('answerRightWrong'); 
var questionHere = document.createElement("questionHere"); 
var finalScore = document.createElement("finalScore"); 


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

// SOMETHING IS WRONG HERE, COME BACK AND FIX THE ORDER OF THE CORRECT ANSWERS
// Object that holds correct answers with the print out of the question. The place of the correct answer in the array of answer options for each question is listed first (in order at the moment, hope to vary this in the future)
var questions = { 
    correct: { 
        0 : "What number is used for the first position in an array",
        1 : "Which of the following is not a programming language?",
        2 : "Where do you link your JavaScript on your HTML file?", 
        3 : "What are variables?", 
        4 : "Which of the following is an example of a string?"
    }
};

//All answers
var answers = { 
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




//button answer option displays

//answer variables that will be attached to each question

//timer
htmlTimeLeft.textContent = timeLeft;

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

//timer score functions (add time for correct answers, remove time for incorrect answers)

//high score storage

//adding score to high score storage

//correct or incorrect answer

