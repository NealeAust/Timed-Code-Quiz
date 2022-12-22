 #Timed-Code-Quiz

## Project Title

To build a multiple-choice quiz based on JavaScript Questions with a timer that starts counting down from 75 seconds after the first question is displayed. The quiz consists of five questions with a selection of four possible answers, the user selects their choice by clicking on the button which contains the answer they believe is correct. The quiz advises the user if the answer is correct and adds one to their score. It also advises if the answer incorrect and deducts 15 seconds off the countdown. 

## Timed Code Quiz 

The Time Code Quiz webpage is an easy to complete quiz that assesses the basic JavaScript knowledge of the user and provides immediate feedback. Having been purposedly designed to meet several non-functional requirements such as, usability and accessibility. It also requires the user to answer all five questions in a timely manner, or execution of program will terminate.
 that is will default to the home page when sec===0. The 'Go Back' function allows the user, or another person can take the quiz again straight away. When all questions are answered the clock stops and the user is asked to input their initials. Their initial and score is saved into local storage. The Timed Code Quiz has been built using HTML, CSS, and JavaScript. 

## Project Description

The objective of this project was to build a quiz to assess the users basic JavaScript knowledge and learn by redoing the quiz straight away or from another person completing the quiz.

Note: A description of how to use the completed web page appears in the 'Usage' section below.

The structure of the coding and what each section does is as follows:

1. Create the array object to hold the questions, choices, and correct answer, include the answer not just its corresponding number (i.e., 3. Alerts).

2. Set-up the home page with text and a start-quiz button to navigate to the first question.

3. Display first question & four options

4. Timer starts, reduces by one second from 75 seconds.

5. When user clicks button to enter their answer program proceeds to next question:
- If answer is correct displays the word "Correct!" and score increases by one.

- If answer is incorrect displays the word "Incorrect" and timer reduces by 15 seconds straight away 

6. Program loops through all five questions using i = [0], [1], [2], [3], [4].

7. When all questions are answered the program navigates to an end of quiz page where their score is displayed, and they are asked to enter their initials. 

8.  Upon clicking submit button program navigates to a final page (high scores) where their initials, and score is displayed.

9. Their initials and score are also saved to local storage.

10. By clicking on the 'goBack' button the program is reloaded and returns to the front page of the application, and the quiz can be repeated.

## Installation

N/A

## Usage

The Timed-Code-Quiz Password is used to assess and improve the user’s general knowledge of JavaScript. 

To use the application the user clicks on the 'Start Quiz' button' The first question is displayed and the user clicks on the button that they believe displays the correct answer. The user then answers a total of five questions to complete the quiz. 

The application has built in business rules so if the user does not complete the quiz within the specified 75 seconds the execution of program is terminated, and it returns to the front page of the application. Users are penalised 15 seconds each time they answer a question incorrectly. Each correct answer increases the score by one.

If the quiz is completed within the seventy-five second timeframe the final score is displayed, the user enters their initial and clicks on the submit button to display their initial and final score, that are also placed in storage.

## Deployed Application and Screenshot

##### Link to the deployed application:

Link:  https://nealeaust.github.io/Timed-Code-Quiz/

##### Screenshot

Home page:

![image](https://user-images.githubusercontent.com/115671306/209070501-5e2c8569-ebbf-4918-987b-2919a19d3443.png)

First question with possible answers:

![image](https://user-images.githubusercontent.com/115671306/209071076-740c6dc3-beb6-4600-871d-e5a297bbe4b1.png)


## Credits

N/A

## License

https://github.com/NealeAust/Timed-Code-Quiz/blob/main/LICENSE



