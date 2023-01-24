let startBtn = document.querySelector("#start-btn");
let startCtn = document.querySelector(".start-ctn");
let quizCtn = document.querySelector(".quiz-ctn");
let scoreCtn = document.querySelector(".score-ctn");
let timer = document.querySelector(".quiz-timer");
let timeCount;
let timeLeft = 60;
let resultCtn = document.querySelector(".result-ctn");
let quizQuestions = document.querySelector(".quiz-questions");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let score = 0;
let quizScore = document.querySelector("#high-score");
let inputName = document.querySelector("#input-name");
let submitBtn = document.querySelector(".name-btn");
let scoreName = document.querySelector("#scoreName");
let scoreScore = document.querySelector("#scoreScore");
let finalName = document.querySelector("#score-name");
let finalScore = document.querySelector("#score-score");
let retryBtn = document.querySelector("#retry-btn");


 function quizStart() {
    if (startCtn.style.display = "block") {
    startCtn.style.display = "none";
    };

    quizCtn.style.display = "block";
    scoreCtn.style.display = "none";

    timeCount = setInterval(function(){
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeCount); 
            alert ("You ran out of time!");
            resultPage();
        };
    }, 1000);
    
    generateQuestions();
};



function resultPage() {
    if (quizCtn.style.display = "block") {
        quizCtn.style.display = "none";
    };

    resultCtn.style.display = "block";

    quizScore.innerHTML = "Final score: " + score + " out of " + questionList.length;
};

let currentQuestion = 0;

function generateQuestions() {
    quizQuestions.textContent = questionList[currentQuestion].question;
    a.textContent = questionList[currentQuestion].a;
    b.textContent = questionList[currentQuestion].b;
    c.textContent = questionList[currentQuestion].c;
    d.textContent = questionList[currentQuestion].d;
};

function checkAnswer(btnclicked) {
    if (btnclicked.currentTarget.id === questionList[currentQuestion].answer){
        alert ("Yes!");
        score++;
    } else {
        alert ("Not exactly.");
    }
    currentQuestion++;
    if (currentQuestion > questionList.length -1) {
        clearInterval(timeCount);
        resultPage();
    } else {
        generateQuestions();
    }
};

function finalScorePage() {
    if (resultCtn.style.display = "block") {
        resultCtn.style.display = "none";
    };

    scoreCtn.style.display = "block";


    finalName.textContent +=  inputName.value;
    finalScore.textContent += score;
};

function startOver() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 60;
    quizStart();
};


let questionList = [{
    question: "What does HTML stand for?",
    a: "Hot Tamale Mama Lorenzo",
    b: "Hyper Text Markup Language",
    c: "Home Tool Manage Log",
    d: "Homebrew Text Manage Language",
    answer: "b"
},
{
    question: "What programming language helps users style their web page?",
    a: "CSS",
    b: "HTML",
    c: "JavaScript",
    d: "Chrome",
    answer: "a"
},
{
    question: "Which one of these isn't a data type?",
    a: "String",
    b: "Boolean",
    c: "Number",
    d: "Function",
    answer: "d"
},
{
    question: "Which one of these is a non senmantic element?",
    a: "<div>",
    b: "<p>",
    c: "<article>",
    d: "<footer>",
    answer: "a"

}];

startBtn.addEventListener("click", quizStart);
a.addEventListener("click", checkAnswer);
b.addEventListener("click", checkAnswer);
c.addEventListener("click", checkAnswer);
d.addEventListener("click", checkAnswer);
submitBtn.addEventListener("click", finalScorePage);
retryBtn.addEventListener("click", startOver);