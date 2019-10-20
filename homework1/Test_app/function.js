var score = document.getElementById("score");
var timer = document.getElementById("timer");
var questions = document.getElementById("questions");
var text = document.getElementById("text");
const start = document.getElementById("start");
var highscore = document.getElementById("highscore");
var display = document.getElementById("display");
let lastQuestionIndex= questions.length-1;
let runningQuestionIndex=0;
const time = 10;
const allTime = 50;
let count = 0;
const progress= allTime/time;
var score1 = 0;

let question = [
  {
    title: "Why is a moon rock tastier than an earth rock?",
    choices: ["Because its made of cheese", "Rocks are delicious", "This is a terrible joke", "Its a little meteor"],
    answer: "Its a little meteor"
  },
  {
    title: "Why dont pirates take a shower before they walk the plank?",
    choices: ["This is cringy. Stop.", "They just wash up on shore", "They are about to take a bath anyways", "Who says he hadn't?"],
    answer: "They just wash up on shore"
  },
  {
    title: "How many tickles does it take to make an octopus laugh?",
    choices: ["1-tickle", "2-tickles", "5-tickles", "10-tickles"],
    answer: "10-tickles"
  },
  {
    title: "How do you invite a dinosaur to lunch?",
    choices: ["Tea, Rex", "....", "That's dangerous.", "Why would a dinosaur speak english?"],
    answer: "Tea, Rex"
  },
  {
    title: "Did you hear about the negative nelly who hates German Sausage?",
    choices: ["Oh boy", "They just wash up on shore", "He always fears the wurst", "10-Tickles"],
    answer: "He always fears the wurst"
  }
  
];
//start quiz
start.addEventListener("click", startQuiz);
function startQuiz(){
  start.style.display="none";
  counter();
  timer= setInterval(counter, 1000);
  renderQuestion();
  container2.style.display = "block";
}

//pop up questions
function renderQuestion(){
  let q = questions[runningQuestionIndex];
  question.innerHTML = "<p>" +q.question+"<p>";
  choiceA.innerHTML = question.choices[0];
  choiceB.innerHTML = question.choices[1];
  choiceC.innerHTML = question.choices[2];
  choiceD.innerHTML = question.choices[3];
}

// const time = 10;
// const allTime = 50;
// let count = 0;
// const progress= allTime/time;



function counter(){
  if(count <= time){
      timer.innerHTML = count;
      count++;
  }else{
    count= 0;
    answerIsWrong();
    if(runningQuestionIndex < lastQuestionIndex){
      runningQuestionIndex++;
      renderQuestion();
    }else{clearInterval(time)}
  }
}

function checkAnswer(answer){
      if(question[runningQuestionIndex].correct === answer){
        score++;
        answerIsCorrect()
      }else{answerIsWrong()}
      if(runningQuestionIndex < lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        renderQuestion();
      }else{
        clearInterval(timer)
        renderScore();
      }

}

answerIsWrong(){
  allTime - 5;
  runningQuestionIndex++;
}



// questions[0].title
// questions[0].choices[0]
// questions[0].choices[1]
// questions[0].choices[2]
// questions[0].choices[3]
// questions[0].answer

// start.addeventlistener("click", function startQuiz(){});
//     h2.innerHTML = questions.choices[i];
//     for(i=0; i<questions.length; i++){

//     };
//     document.
//start the quiz
//replace text and start quiz timer

// answer ++;


// //18:00


//function for looper to display questions
// for(i=0; i<questions.length; i++){
//   var response = ;
//   if (response=== questions[i].answer){
//     score ++;
//     alert("correct");
//     else {
//       alert("Wrong")
//     }
//   }
// }
// looper(questions[0]);
// looper(questions[1]);
// looper(questions[2]);
// looper(questions[3]);
// looper(questions[4]);



// function looper(k){
//   for(var i=0; i<k.length; i++){
//       console.log(k[i])
// }}
// looper(numbers)
// looper(numbers2)


// score = timeLeft + correct