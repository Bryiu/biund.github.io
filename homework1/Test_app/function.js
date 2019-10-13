var highscore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var h2 = document.getElementById("h2");
var text = document.getElementById("text");
var start = document.getElementById("start");
var highscore = document.getElementById("highscore");
var display = document.getElementById("display");

var questions = [
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
  },
  
];

start.addeventlistener("click", function startQuiz(){
    setInterval()

//start the quiz
//replace text and start quiz timer

answer ++;

});

//function for looper to display questions

looper(questions[0]);
looper(questions[1]);
looper(questions[2]);
looper(questions[3]);
looper(questions[4]);



// function looper(k){
//   for(var i=0; i<k.length; i++){
//       console.log(k[i])
// }}
// looper(numbers)
// looper(numbers2)


// score = timeLeft + correct