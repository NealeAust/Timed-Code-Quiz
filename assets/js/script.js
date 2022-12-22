// console.log(initialEL.value)
var question = document.querySelector("#question")
var results = document.querySelector("#results")
var score = 0;
var sec = 75;
var index = 0;
var highScores = document.querySelector("#highScores")
highScores.style.display = "none"
var timer;
var btn;

// Array object to store quiz questions,choices for user to choose and answer
// Correct info & layout critical to success as accessed by functions below 
var allQuestions = [{
    question: 'Commonly used data types DO NOT include:',
    choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    correctAnswer: '3. alerts'// Note correct answer has contains value not just  
},
{
    question: 'The condition in an if / else statement is enclosed with _______.',
    choices: ['1. quotes', '2. curley brackets', '3. parenthesis', '4. square brackets'],
    correctAnswer: '3. parenthesis'
},
{
    question: 'Arrays in JavaScript can be used to store ________.',
    choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
    correctAnswer: '4. all of the above'
},
{
    question: ['String values must be enclosed with _______  when  being assigned to variables'],
    choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
    correctAnswer: '3. quotes'
},
{
    question: 'A very useful tool used during development and\ndebugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    correctAnswer: '4. console.log'
}];

// Start quiz - navigate to first question 
var btn = document.querySelector(".start-button")
results.style.display = "none"
btn.addEventListener("click", function () {
    var header = document.querySelector("header")
    header.style.display = "none"
    question.style.display = "block"
    Questions()


    // timer countown starts and displayed
    // Seconds left checked and quiz stopped at zero or go to next question.
    // Must answer all before seconds = 0 or return to front page
    timer = setInterval(function () {
        sec--;
        document.getElementById("timerDisplay").innerHTML = '00:' + sec;
        if (sec <= 0) {
            clearInterval(timer);
            quizEndingFunction()
        }
    }, 1000);
})

//Run the quiz, loops through questions index 0-4, choice based on button pressed
function Questions() {

    console.log(index)
    console.log(allQuestions.length)

    // After each answer selected checks if last question
    // If last question stops clock, quiz completed OR
    // will display next question
    if (index === allQuestions.length) {
        stopClock()
        quizEndingFunction()

    } else {


        var questionel = document.querySelector("h3")
        questionel.textContent = allQuestions[index].question
        console.log(allQuestions[index].choices[0])

        var button1 = document.getElementById("choice1")
        button1.textContent = allQuestions[index].choices[0]
        button1.addEventListener("click", choiceSelect);

        var button2 = document.getElementById("choice2")
        button2.textContent = allQuestions[index].choices[1]
        button2.addEventListener("click", choiceSelect)

        var button3 = document.getElementById("choice3")
        button3.textContent = allQuestions[index].choices[2]
        button3.addEventListener("click", choiceSelect)

        var button4 = document.getElementById("choice4")
        button4.textContent = allQuestions[index].choices[3]
        button4.addEventListener("click", choiceSelect)
    }
}
// Conditional operator to check answer and displays whether correct or incorrect 
// Score increased by 1 if correct
// Note time left instantly reduced by 15 seconds if answer incorrect
function choiceSelect(event) {
    console.log(event.target.textContent, "clicked choice");
    console.log(allQuestions[index].correctAnswer, "Answer");
    console.log(allQuestions[index].choices, "choices");

    if (event.target.textContent === allQuestions[index].correctAnswer) {
        console.log(allQuestions[index].isCorrect, "correct");
        isCorrect.textContent = "Correct!";
        score++
        index++
        Questions()

    } else {
        console.log(allQuestions[index].isCorrect, "incorrect");
        sec -= 15;
        isCorrect.textContent = "Incorrect!";
        index++
        Questions()
    }
}

// startTimer() called at 1st question & stopClock() after last question choice entered
function startTimer() {

    console.log("timer suppose to go")
    timer
}
function stopClock() {
    clearInterval(timer);
}

// Quiz completed, stop timer and calculate & display score
function quizEndingFunction() {
    stopClock()
    question.style.display = "none"
    results.style.display = "block"
    var finalScore = document.getElementById("finResults")
    finalScore.textContent = 'Your final score is: ' + score;
    console.log(finalScore)


    // User enters their initials and submits result of quiz
    var initialEL = document.getElementById("textBox");
    console.log(initialEL.value)
    console.log("This is score: ", score)
    submit.addEventListener("click", function () {
        isCorrect.style.display = 'none'
        results.style.display = "none"
        highScores.style.display = "block"
        document.getElementById("textBoxHscore").innerHTML = (initialEL.value + ":" + score)

        // Save into local storage
        localStorage.setItem('Initial', initialEL.value);
        localStorage.setItem( 'score', score);

        console.log(localStorage)
        goBack.addEventListener("click", function () {
            highScores.style.display = "none"
            location.reload();

        })
    })
}
