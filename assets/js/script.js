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
var timeEl = document.getElementById("time");
var comment = document.getElementById("comment");


//Array with Q/A
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            'js',
            'script',
            'javascript',
            'scripting'
        ],
        correctAnswer: 'script'
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            'The head section',
            'Both the <head> section and the <body> section are correct',
            'The body section',
            'none'
        ],
        correctAnswer: 'The body section'
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            'script src="xxx.js"',
            'script name="xxx.js"',
            'script href="xxx.js"',
            'none'
        ],
        correctAnswer: 'script src="xxx.js"'
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: [
            "False",
            "True",
            "It's depend where the file located",
            "It's depend where in html located link to js file"
        ],
        correctAnswer: 'False'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            'alert("Hello World");',
            'msg("Hello World");',
            'alertBox("Hello World");',
            'msgBox("Hello World");'
        ],
        correctAnswer: 'alert("Hello World");'
    }
];

var time = questions.length * 10;

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
        answerBtn.setAttribute("class", "btn btn-primary m-1");
        answerBtn.setAttribute("value", answer);
        answerBtn.innerHTML = i + 1 + " . " + answer;
        answerBtn.onclick = checkAnswer;
        answersEl.appendChild(answerBtn);
    });
}

function checkAnswer() {
    if (this.value !== questions[taskIdIndex].correctAnswer) {
        time -= 10;
        if (time < 0) {
            comment.textContent = "Time is up!";
            time = 0;
        }
        comment.textContent = "wrong";
    }
    else {
        comment.textContent = "correct!";
    }

    taskIdIndex++;
    if (taskIdIndex === questions.length) {
        comment.textContent = "Your quiz is over!";
        endQuiz();
    }
    quizGeneration();
    
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



function saveToLocal(e) {
    e.preventDefault();
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