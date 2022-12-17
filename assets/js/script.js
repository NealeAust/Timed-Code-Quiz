
var score = 0;


var btn = document.querySelector(".start-button")
btn.addEventListener("click", function () {
    var header = document.querySelector("header")
    header.style.display = "none"
    var question = document.querySelector("#question")
    question.style.display = "block"
    startTimer()     
    Questions()
    
})


var index = 0

function Questions() {
    
    console.log(allQuestions[index])
    console.log(allQuestions[index].question)
    var questionel = document.querySelector("h3")
    questionel.textContent = allQuestions[index].question
    console.log(allQuestions[index].choices[0])
    var button1 = document.getElementById("choice1")
    button1.textContent = allQuestions[index].choices[0]
    button1.addEventListener("click", choiceSelect) 

    
      
 
 {   
    var button2 = document.getElementById("choice2")
    button2.textContent = allQuestions[index].choices[1]
    button2.addEventListener("click", choiceSelect)
   
 }
        
  {
    var button3 = document.getElementById("choice3")
    button3.textContent = allQuestions[index].choices[2]
    button3.addEventListener("click", choiceSelect)
  }    

  {
  
var button4 = document.getElementById("choice4")
    button4.textContent = allQuestions[index].choices[3]
    button4.addEventListener("click", choiceSelect)
  }  
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
    question: 'String values must be enclosed with _______  when being assigned to variables',
    choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
    correctAnswer: 3
},
{
    question: 'A very useful tool used during development and\ndebugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    correctAnswer: 4
}];

function choiceSelect(event) {
    console.log(event.target.textContent);
    console.log(allQuestions[index].correctAnswer);

    index++
    Questions()
}




    var sec = 100;
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);

    }

    // function inCorrect(){
    //     document.getElementById('incorrect').addEventListener('click', function() {
    //         sec -= 15;
    //         document.getElementById('timerDisplay').innerHTML='00:'+sec;
    //         });
    //         startTimer();

    // }
