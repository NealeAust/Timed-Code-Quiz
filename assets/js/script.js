var btn = document.querySelector(".start-button")
btn.addEventListener("click", function () {
    var header = document.querySelector("header")
    header.style.display = "none"
    var question = document.querySelector("#question")
    question.style.display = "block"
    Questions()
})

function Questions() {
    console.log(allQuestions[0])
    console.log(allQuestions[0].question)
    var questionel = document.querySelector("h3")
    questionel.textContent = allQuestions[0].question
    console.log(allQuestions[0].choices[0])
    var button1 = document.getElementById("choice1")
    button1.textContent = allQuestions[0].choices[0]
    button1.addEventListener("click", function () {
        //check if correct answer 
        //Questions()
    })
    var button2 = document.getElementById("choice2")
    button2.textContent = allQuestions[0].choices[1]
    button2.addEventListener("click", function () {
        //check if correct answer 
        //Questions()
    })
    var button3 = document.getElementById("choice3")
    button3.textContent = allQuestions[0].choices[2]
    button3.addEventListener("click", function () {
        //check if correct answer 
        //Questions()
    })
    var button4 = document.getElementById("choice4")
    button4.textContent = allQuestions[0].choices[3]
    button4.addEventListener("click", function () {
        //check if correct answer 
       // Questions()
    })
}

var allQuestions = [{
    question: 'Commonly used data types DO NOT include:',
    choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    correctAnswer: 3.
},
{
    question: 'The condition in an if / else statement is enclosed with _______.',
    choices: ['1. quotes', '2. curley brackets', '3. parenthesis', '4. square brackets'],
    correctAnswer: 3
},
{
    question: 'Arrays in JavaScript can be used to store ________.',
    choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
    correctAnswer: 4
},
{
    question: 'String values must be enclosed with _______ when being assigned to variables',
    choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
    correctAnswer: 3
},
{
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    correctAnswer: 4
}];

