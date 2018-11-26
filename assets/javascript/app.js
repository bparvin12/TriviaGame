$(document).ready(function(){


var number = 5;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(".slide2").hide();
    $(".slide3").hide();
}

function decrement () {
    number--;
    $(".timeRemaining").html("<h4>" + number + "</h4>");

    if (number === 0) {
        stop ();
        $(".slide1").hide();
        $(".slide2").show();   
    }
    
}



function stop () {
    clearInterval(intervalId);
}

run();
// run1();

// end brackets of document ready
})