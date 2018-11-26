$(document).ready(function(){

    // at the start of the game, only slide one shows
function start() {
    $(".slide2, .slide3, .slide4").hide();
}

// upon selecting start the game moves to the second slide and starts game
$(".start").on('click', function() {
    $(".slide1, .slide3, .slide4").hide();
    $(".slide2").show();
    
    var number = 5;
    var intervalId;

    function run () {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement () {
        number--;
        $(".timeRemaining").html("<h4>" + number + "</h4>");

        if (number === 0) {
            stop ();
            $(".slide1, .slide2, .slide4").hide();
            $(".slide3").show();  
            setTimeout(function(){
                $(".slide1, .slide2, .slide3").hide();
                $(".slide4").show();
                number = 5;
            }, 5000);

        }
    }
    function stop() {
        clearInterval(intervalId);
    }
    run();
});

//clicking the right or wrong answer brings up slide three
$(".wrong1").on('click', function () {
    $(".slide1, .slide2, .slide4").hide();
    $(".slide3").show();
    setTimeout(function(){
        $(".slide1, .slide2, .slide3").hide();
        $(".slide4").show();
        number = 5;
    }, 5000);
});

$(".right1").on('click', function () {
    $(".slide1, .slide2, .slide4").hide();
    $(".slide3").show();
    setTimeout(function(){
        $(".slide1, .slide2, .slide3").hide();
        $(".slide4").show();
        number = 5;
    }, 5000);
});





start();








// end brackets of document ready
})