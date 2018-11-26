$(document).ready(function(){

    // at the start of the game, only slide one shows


var card = $("#quiz-area");
var countStartNumber = 30; //30 seconds

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
];

var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,
    // unanswered: 0,

    countdown: function(){
        this.counter--;
        $("#counter-number").text(this.counter);
        if (this.counter === 0) {
            this.timeUp();
        }
    },

    loadQuestion: function() {
        timer = setInterval(this.countdown.bind(this), 1000);

        card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + "</button");  
        }
    },

    nextQuestion: function(){
        this.counter = countStartNumber;
        $('#counter-number').text(this.counter);
        this.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {

        clearInterval(timer);

        $('#counter-number').html(this.counter);

        card.html("<h2>Out of Time!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);

        if(this.currentQuestion === questions.length -1) {
            setTimeout(this.results, 3000);
        }
        else {
            setTimeout(this.nextQuestion, 3000);
        }
    },

    results: function () {
        
        clearInterval(timer);

        card.html("<h2>All done, heres how you did!</h2>");

        $("#counter-number").text(this.counter);

        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        card.append("<br><button id='start-over'>Start Over?</button>");
    },

    clicked: function(variable) {
        clearInterval(timer);
        if ($(variable.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly ();
        }
        else {
            this.answeredInCorrectly ();
        }
    },

    answeredInCorrectly: function () {
        this.incorrect++;
        clearInterval(timer);

        card.html("<h2>Incorrect! Minus 5 point from Griffindor!");
        card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3 * 1000);
          }
          else {
            setTimeout(this.nextQuestion, 3 * 1000);
          }
    },

    answeredCorrectly: function() {
        this.correct++;
        clearInterval(timer);
        
        card.html("<h2>Correct! Plus 5 points for Griffindor!");
       
        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3 * 1000);
          }
          else {
            setTimeout(this.nextQuestion, 3 * 1000);
          }

    },

    reset: function () {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }, 
};








// $(document).on('click', "#start-over", game.reset.bind(game));

$(".start").on('click', function(){
    game.loadQuestion.bind(game)();
    // game.countdown.bind(game)();
});





// end bracket of document ready
});
