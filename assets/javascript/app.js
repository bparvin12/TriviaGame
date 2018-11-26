$(document).ready(function(){

    // at the start of the game, only slide one shows
function start() {
    $(".slide2, .slide3, .slide4").hide();
}

// upon selecting start the game moves to the second slide
$(".start").on('click', function() {
    $(".slide1, .slide3, .slide4").hide();
    $(".slide2").show();
});

//clicking the right or wrong answer brings up slide three
$(".wrong1").on('click', function () {
    $(".slide1, .slide2, .slide4").hide();
    $(".slide3").show();
});

$(".right1").on('click', function () {
    $(".slide1, .slide2, .slide4").hide();
    $(".slide3").show();
});




start();








// end brackets of document ready
})