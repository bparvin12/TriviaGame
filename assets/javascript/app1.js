$(document).ready(function(){

    // at the start of the game, only slide one shows


var card = $(".question");
var start = 30 //30 seconds

var questions = [
    {
        question: "In Harry Potter and the Philosopher's Stone which Gringott's Vault was the Philosopher's Stone kept in?",
        answers: [703, 507, 713, 217],
        correctAnswer: 713,
    },
    {
        question: "What is Lord Voldemort's real name?",
        answers: ["Salazar Slytherin", "Tom Marvolo Riddle", "Gellert Grindelwald", "Morfin Gaunt"],
        correctAnswer: "Tom Marvolo Riddle",
    },
    {
        question: "Who destroyed the last remaining Horcrux?",
        answers: ["Neville Longbottom", "Ron Weasley", "Hermione Granger", "Harry Potter"],
        correctAnswer: "Neville Longbottom",
    },
]

var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    startTimer: start,
    correct: 0,
    incorrect: 0,
    // unanswered: 0,

    countdown: function(){
        this.startTimer--;
        $(".timeRemaining").text(this.startTimer);
        if (this.startTimer === 0) {
            console.log("time is up");
            this.timeUp();
        }
    },

    loadQuestion: function() {
        timer = setInterval(this.countdown.bind(this), 1000);
        card.html("<h3>" + questions[this.currentQuestion.question] + "</h3>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            $(".ans").append("<a href='#' class='list-group-item list-group-item-action list-group-item-dark'>" + questions[this.currentQuestion].answers[i] + "</a>");
        };
    },

    nextQuestion: function(){
        this.currentQuestion++;
    },

    start: function() {
        $(".slide2").hide();
    
        $(".start").on('click', function() {
            $(".slide1").hide();
            $(".slide2").show();
        });
    },
}








// $(document).on('click', "#start-over", game.reset.bind(game));

$(".start").on('click', function(){
    game.loadQuestion.bind(game)();
});





// end bracket of document ready
});
