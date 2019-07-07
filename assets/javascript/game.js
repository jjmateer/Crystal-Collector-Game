$(document).ready(function () {
    //Create variables
    var randomResult;
    var wins = 0;
    var losses = 0;
    var userScore = 0;

    //Create random number that you have to guess is between 19 and 120

    randomResult = Math.floor(Math.random() * 102 + 19);
    $("#randomNum").html('Random Number: ' + randomResult);

    // Make variables for the random value of each crystal

    var num1 = Math.floor(Math.random() * 12 + 1);
    var num2 = Math.floor(Math.random() * 12 + 1);
    var num3 = Math.floor(Math.random() * 12 + 1);
    var num4 = Math.floor(Math.random() * 12 + 1);

    //Create a reset function
    function reset() {
        randomResult = Math.floor(Math.random() * 102 + 19);
        $("#randomNum").html('Random Number: ' + randomResult);
        var num1 = Math.floor(Math.random() * 12 + 1);
        var num2 = Math.floor(Math.random() * 12 + 1);
        var num3 = Math.floor(Math.random() * 12 + 1);
        var num4 = Math.floor(Math.random() * 12 + 1);
        userScore = 0;
        console.log();
    }
    // Show the number of games the player wins and loses and create functions to count wins and loses.
    $('#winsText').text("Wins: " + wins);
    $('#lossesText').text("Losses: " + losses);
    function win() {
        $('#win-area').text("You win!!!")
        wins++;
        $('#winsText').text("Wins: " + wins);
        reset();
    }
    function lose() {
        $('#win-area').text("You lose!!!")
        losses++;
        $('#lossesText').text("Losses: " + losses);
        reset();
    }
    //Create on click functions for each crystal with if statements that determine if you win or lose and trigger a reset.
    $('#red').on("click", function () {

        userScore = num1 + userScore;
        if (userScore === randomResult) {
            win();
            reset();

        }
        if (userScore > randomResult) {
            lose();
            reset();

        }

        $('#totalScore2').text(userScore)
    });
    $('#blue').on("click", function () {

        userScore = num2 + userScore;
        if (userScore === randomResult) {
            win();
            reset();

        }
        if (userScore > randomResult) {
            lose();
            reset();

        }

        $('#totalScore2').text(userScore)
    });
    $('#white').on("click", function () {

        userScore = num3 + userScore;
        if (userScore === randomResult) {
            win();
            reset();

        }
        if (userScore > randomResult) {
            lose();
            reset();

        }

        $('#totalScore2').text(userScore)
    });
    $('#yellow').on("click", function () {

        userScore = num4 + userScore;
        if (userScore === randomResult) {
            win();
            reset();

        }
        if (userScore > randomResult) {
            lose();
            reset();

        }


        $('#totalScore2').text(userScore)
    });
});
