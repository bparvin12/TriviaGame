$(document).ready(function(){

    // at the start of the game, only slide one shows
function start() {
    $(".slide2").hide();

    $(".start").on('click', function() {
        $(".slide1").hide();
        $(".slide2").show();
    });
}

function displayQuestion () {
    $(".questionNumber").html("Question: ");
    $(".question").html("<h4>" + quest1.trivQuestion + "</h4>");
    $(".ans1").html(quest1.trivAnswer1);
    $(".ans2").html(quest1.trivAnswer2);
    $(".ans3").html(quest1.trivAnswer3);
    $(".ans4").html(quest1.trivAnswer4);
    
};





function Trivia (q, a1, a2, a3, a4, correct) {
    this.trivQuestion = q;
    this.trivAnswer1 = a1;
    this.trivAnswer2 = a2;
    this.trivAnswer3 = a3;
    this.trivAnswer4 = a4;
    this.trivCorrect = correct
}

var quest1 = new Trivia("In Harry Potter and the Philosopher's Stone which Gringott's Vault was the Philosopher's Stone kept in?", 703, 507, 713, 217, 713);
var quest2 = new Trivia("What is Lord Voldemort's real name?", "Salazar Slytherin", "Tom Marvolo Riddle", "Gellert Grindelwald", "Morfin Gaunt", "Tom Marvolo Riddle");
var quest3 = new Trivia("Who destroyed the last remaining Horcrux?", "Neville Longbottom", "Ron Weasley", "Hermione Granger", "Harry Potter", "Neville Longbottom");


displayQuestion ();
start();




// end bracket of document ready
});
