$(document).ready(function(){

var card = $("#quiz-area");
var start = 30; //30 seconds 

var questions = [
    {
        question: "What is my name?",
        answers: ["Drew", "Taylor", "Nick", "Archie"],
        correctAnswer: "Drew",
        // could add a gif or image
    },
    {
        question: "What day is it?",
        answers: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correctAnswer: "Monday",
    },
]

var timer;

//this is what the game does/has
var game = {
    questions: questions,
    currentQuestion: 0,
    startTimer: start, // 30
    correct: 0,
    incorrect: 0,
    // unanswered: 0,

    countdown: function(){
        this.startTimer--;
        $("#counter-number").text(this.startTimer);
        if (this.number === 0) {
            console.log("Time is up");
            //this.timeUp()
        }
    },

    loadQuestion: function () {
        //bind the countdown to the game object. this is referring to game object 
        timer = setInterval(this.countdown.bind(this), 1000);
        //questions refers to object with all the questions, this.currentquestion refers to variable made in game...so = 0; 
        //and .question refers to only the single question in first object of array 
        card.html("<h2>" + questions[this.currentQuestion.question] + "</h2>");
        //create a for loop
        //looping through each questions. then grabbing the answers, and the number of answers. this makes it 
        //so the number of answers can be dynamic
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++){
            card.append("<button class='answer-button' id='button'>" + questions[this.currentQuestion].answers[i] + "</button>")
        };
    },

    nextQuestion: function (){
        this.currentQuestion++;
    },

    timeUp: function () {

    },

    results: function(){

    },

    clicked: function(){

    },

    answer: function (){
        if (this.question[this.currentQuestion].correctAnswer == $('button').val()) {
            this.correct++;
        }
        else {
            this.incorrect++;
        }
    },

    reset: function(){
        this.currentQuestion = 0;
        this.counter = 30;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    },
}

$(document).on('click', "#start-over", game.reset.bind(game));

$(document).on('click', "#start", function(){
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds </h2>")
    game.loadQuestion.bind(game)();
});

});