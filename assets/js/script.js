var timerEl = document.getElementById('countdown');
var taskIdIndex = 0;
var quizEl = document.getElementById('quiz');
var results = document.getElementById('results');
var submitBtnEl = document.getElementById('submit');
var answersEl = document.getElementById("answers");
var questionsEl = document.getElementById("questions")
var paragraph = document.getElementById('paragraph');
var timeLeft;
var saveScoreBtn = document.getElementById("save");
var countdown;
var initials = document.getElementById("GET-name");
//var recordNameArr = [];
var timeEl = document.getElementById("time");
//Array with Q/A
var questions = [
    {
        question: "What is 10/2?",
        answers: [
            '3',
            '5',
            '115',
            'blah'
        ],
        correctAnswer: '5'
    },
    {
        question: "What is 30/3?",
        answers: [
            '10',
            'asd',
            'xzc',
            '1q2w3e'
        ],
        correctAnswer: '10'
    }
];

var time = questions.length * 100;

//Timer
function countdown() {
    time--;
    timeEl.textContent = "Time: " + time + " seconds left.";
    if (time <= 0) {
        endQuiz();
        
    }
}

//function
function start() {
    quizEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timeLeft = setInterval(countdown, 1000);
    timeEl.textContent = time;
    quizGeneration();
}

//Function to make a quiz
function quizGeneration() {
    var currentQuestion = questions[taskIdIndex];
    var questionEl = document.getElementById("question");
    questionEl.textContent = currentQuestion.question;

    answersEl.innerHTML = "";
    currentQuestion.answers.forEach(function (answer, i) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "answer");
        answerBtn.setAttribute("value", answer);
        answerBtn.textContent = i + 1 + " . " + answer;
        answerBtn.onclick = checkAnswer;
        answersEl.appendChild(answerBtn);
    });
}

function checkAnswer() {
    if (this.value !== questions[taskIdIndex].correctAnswer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
    }

    taskIdIndex++;
    if (taskIdIndex === questions.length) {
        endQuiz();

    }
    else {
        quizGeneration();
    }
    
}

function endQuiz() {
    //debugger;
    //stop the timer
    clearInterval(timeLeft);
    timeEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
    results.removeAttribute("class");
    
    console.log("this is the end");
    //calll out the final score
    //time to final score value





}



function saveToLocal() {
    initials = initials.value.trim();
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    //window.location.href = "highScores.html";
    var newScoreObj = {
        initials: initials,
        score: time
    };
    highScores.push(newScoreObj);
    localStorage.setItem("highScores", JSON.stringify(highScores));

    console.log(window.location);
    window.location.href = "highScores.html";
}



submitBtnEl.addEventListener("click", start);
results.addEventListener("submit", saveToLocal);