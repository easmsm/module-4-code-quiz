//I would like to eventually try my first method of populating the answer option buttons (copied out in the script.js file), but I was unable to get the logic to work. 
//By putting the questions in a separate file, I can keep things organized and call them at random, to mix up the quiz for each play through
var questions = [
    {
        title: "What number is used for the first position in an array",
        choices: ["0", "1", "2", "None of these"],
        answer: "0"
    },
    {
        title: "Which of the following is not a programming language?",
        choices: ["Java", "Jaba", "JavaScript", "Python"],
        answer: "Jaba"
    },
    {
        title: "Where do you link your JavaScript to your HTML file?",
        choices: ["In the header", "In the footer", "At the bottom of the file, right before the close of the body tag", "At the top of the file, after the html language is designated"],
        answer: "At the bottom of the file, right before the close of the body tag"
    },
    {
        title: "Which of the following is an example of a string?",
        choices: ["!Where's Waldo?", "Where's Waldo?", "'Where's Waldo?'", "How is Waldo?"],
        answer: "'Where's Waldo?'"
    },
    {
        title: "What are variables?",
        choices: ["Placeholders for numbers", "Where deleted information is stored", "Text input spaces for end users","Where information is stored"],
        answer: "Where information is stored"
    }
]