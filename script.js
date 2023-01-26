
var index = 0;
var score= 0;
var correct= 0;
var wrong = 0;
var secondsLeft = 60;

// set of questions 
var questions = [
{   question : "Javascript is an _______ language?",
    choiceOne: " Object-Oriented",
    choiceTwo: " Object-Based",
    choiceThree: " Procedural",
    choiceFour: " None of the Above",
    rightAnswer: "Object-Oriented"
},
{   question : "Which of the following keywords is used to define a variable in Javascript?",
    choiceOne : "var",
    choiceTwo : "let",
    choiceThree : "Both A and B",
    choiceFour: "None of the Above",
    rightAnswer: "Both A and B"
},
{   question : "Which of the following methods is used to access HTML elements using Javascript?",
    choiceOne : "getElementbyId()",
    choiceTwo : "getElementByClassName()",
    choiceThree : "Both A and B",
    choiceFour: "None of the Above",
    rightAnswer: "Both A and B"
},
{   question : "Upon encountering empty statements, what does the Javascript interpreter do?",
    choiceOne : "Throw an error",
    choiceTwo : "Ignores the statements",
    choiceThree : "Gives a warning",
    choiceFour: "None of the above",
    rightAnswer: "Ignores the statements"
},
]

var viewHighScores = document.getElementById("viewHighScores");
var timeLeft = document.getElementById("timeleft");

var startQuiz = document.getElementById("startquiz");
var startButton = document.getElementById ("startbutton");

var questionList = document.getElementById("quiz-list");

var finalResult = document.getElementById("result");
var resultText = document.querySelector("#resultText");
var playerName = document.querySelector("#nameInput");
var name = document.querySelector("#name");
var submitButton = document.querySelector("#buttonSubmitName");

var highScoreResult = document.querySelector("#finalScoreNotice");
var clearHighScores = document.querySelector("#clearHighScores");

var finalscore = document.getElementById("score");

// clicking the start button to start the quiz
startButton.addEventListener("click", start);


// hide the quiz start part and go to questions
function start(){
    startQuiz.classList.add("hidden");
    questionList.classList.remove("hidden");
    currentQuestionIndex = 0;
    startQuestions();
}

function startQuestions() {
    var questionContent = document.getElementById("question-title");
    var Answer1 = document.getElementById("ans1");
    var Answer2 = document.getElementById("ans2");
    var Answer3 = document.getElementById("ans3");
    var Answer4 = document.getElementById("ans4");

    questionContent.textContent = questions[index].question;
    Answer1.textContent = questions[index].choiceOne;
    Answer2.textContent = questions[index].choiceTwo;
    Answer3.textContent = questions[index].choiceThree;
    Answer4.textContent = questions[index].choiceFour;

    setTime();

    questionList.classList.remove("hidden");
    q

// if clicking on question answers show the correct result and stop when the questions ends;

    goNextQuestion();
}

questionList.addEventListener("click", startQuestions);

questionList.addEventListener("click", function(event){
 var chosen= event.target.textContent;
 if (questions == questions[index].choiceOne && questions == questions[index].choiceTwo && questions == questions[index].choiceThree && questions == questions[index].choiceFour ){

 }
 else{
    secondsLeft = secondsLeft - 10;
 }
 goNextQuestion();
});


// setting the time interval
var currentQuestionIndex= 0;
var answer;

function setTime (){
    var timerInterval = setInterval (function(){
    secondsLeft--;
    timeLeft.textContent = "Time: " + secondsLeft + " seconds";
    if (secondsLeft <= 0 || questionNumber === questions.length) {
        clearInterval(timerInterval);
    }
    }, 1000);
}


function goNextQuestion(event){
    index++;
    if (index => questions.length){

        // endGame();
        return;
    }
    startQuestions();
    }

function sendMessage(){
    timeLeft.textContent = "Time is up";
}

function endGame(){
    sendMessage();
    questionList.classList.add("hidden");
    finalResult.classList.remove("hidden");
    var initials = document.querySelector("#name").value ;
}






































