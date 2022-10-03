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

//questions

//button answer option displays

//answer variables that will be attached to each question

//timer

//timer score functions (add time for correct answers, remove time for incorrect answers)

//high score storage

//adding score to high score storage

//correct or incorrect answer

