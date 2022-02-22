var timerEl = document.getElementById('countdown');
var taskIdCounter = 0;
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var questionEl = document.getElementById('h1-text');
var paragraph = document.getElementById('paragraph');
var j = 0;
//Timer
function countdown() {
    var timeLeft = 25;
  
    var timeInterval = setInterval(function() {
      if(timeLeft > 0) {
        timerEl.textContent = "Time: " + timeLeft + " seconds left.";
        timeLeft--;
        return
      }
      else {
        //displayMessage();
        //mainEl.textContent = "Boooooom!";
        clearInterval(timeInterval);
        timerEl.textContent = "";
      }
      
    }, 1000);
}



//Array with Q/A
var questions = [
	{
		question: "What is 10/2?",
		answers: {
			1: '3',
			2: '5',
			3: '115',
            4: 'blah'
		},
		correctAnswer: '2'
	},
	{
		question: "What is 30/3?",
		answers: {
			1: 'qw',
			2: 'asd',
			3: 'xzc',
            4: '1q2w3e'
		},
		correctAnswer: '3'
	}
];

//function
function start() {
    submitButton.textContent = "Next question!";
    
    paragraph.innerText = "";
    for (i=0; i < 4; i++) {
        var answerItemEl = document.createElement("button");
        answerItemEl.className = "answer-item";
        answerItemEl.setAttribute("data-answer-id", taskIdCounter);

        quizContainer.appendChild(answerItemEl);     
    }
    quizGeneration(questions);
}


//Function to make a quiz
function quizGeneration (questions) {
    //quizContainer.replaceChildren(quizContainer.replaceChildren);
    
    questionEl.innerText = questions[j].question;

    for (i=0; i < 4; i++) {
        
        var answerButton = document.querySelector(
            ".answer-item[data-answer-id='" + i + "']"
          );
        answers = Object.values(questions[j].answers);
        answerButton.textContent = answers[i];        
    }
    j++;
}

submitButton.addEventListener("click", start);

 /*
    
 function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(number in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+number+'">'
                        + number + ': '
                        + questions[i].answers[number]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

	function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
 */





//Start button

