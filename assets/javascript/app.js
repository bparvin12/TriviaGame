$(document).ready(function(){

    // at the start of the game, only slide one shows


var card = $("#quiz-area");
var countStartNumber = 30; //30 seconds

var questions = [
    {
        question: "In Harry Potter and the Philosopher's Stone which Gringott's Vault was the Philosopher's Stone kept in?",
        answers: ["703", "507", "713", "217"],
        correctAnswer: "713",
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
    {
        question: "Who does Hermione impersonate using polyjuice potion when she, Ron, and Harry break into Gringotts?",
        answers: ["Bellatrix LeStrange", "Narcissa Malfoy", "Dumbledore", "Professor McGonagall"],
        correctAnswer: "Bellatrix LeStrange",
    },
    {
        question: "What color is the Weasley's flying car?",
        answers: ["Red", "Yellow", "Blue", "Black"],
        correctAnswer: "Blue",
    },
    {
        question: "Which house team does Harry play agaisnt in his first Quidditch match?",
        answers: ["Slytherin", "Ravenclaw", "Hufflepuff", "Griffindor"],
        correctAnswer: "Slytherin",
    }
]

var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,
    // unanswered: 0,

    countdown: function() {
        this.counter--;
        $("#counter-number").text(this.counter);
        if (this.counter === 0) {
            this.timeUp();
        }
    },

    loadQuestion: function() {

        timer = setInterval(game.countdown.bind(this), 1000);

        card.html("<br><h3>" + questions[this.currentQuestion].question + "</h3><br>");

        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            card.append("<button class='answer-button btn btn-primary' id='button' data-name='" + questions[this.currentQuestion].answers[i] + "'>" 
            + questions[this.currentQuestion].answers[i] + "</button>");  
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(this.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {

        clearInterval(timer);

        $("#counter-number").html(this.counter);

        card.html("<h2>Merlin's Beard! You are out of time!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);

        if(this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3000);
        }
        else {
            setTimeout(this.nextQuestion, 3000);
        }
    },

    results: function () {
        
        clearInterval(timer);

        card.html("<br><strong><h2>Mischief Managed!</h2></strong><br>");

        $("#counter-number").text(game.counter);

        card.append("<h3>Horcruxes Destroyed: " + game.correct + "</h3><br>");
        card.append("<h3>Horcruxes Alive: " + game.incorrect + "</h3><br>");
        card.append("<h3>Unfound Horcruxes: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
        card.append("<br><button id='start-over'>Play Again?</button>");
    },

    clicked: function(variable) {
        clearInterval(timer);
        if ($(variable.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        }
        else {
            this.answeredIncorrectly();
        }
    },

    answeredIncorrectly: function () {
        this.incorrect++;
        clearInterval(timer);

        card.html("<br><h2>Incorrect! Minus 5 points from Griffindor!</h2>");
        card.append("<br><h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3000);
          }
        else {
            setTimeout(this.nextQuestion, 3000);
        }
    },

    answeredCorrectly: function() {
        
        clearInterval(timer);

        this.correct++;
        
        card.html("<br><h2>Correct! 5 points for Griffindor!</h2>");
       
        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3000);
          }
          else {
            setTimeout(this.nextQuestion, 3000);
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

$(document).on('click', "#start-over", function() {
    game.reset.bind(game)();
});

$(document).on('click', ".answer-button", function(variable) {
    game.clicked(variable);
});

$(document).on('click', "#start", function () {
    $("#wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion.bind(game)();
});



// end bracket of document ready
});
