$(document).ready(function () {
    //Create variables
    var randomResult;
    var wins = 0;
    var losses = 0;
    var userScore = 0;

    //Create random number that you have to guess is between 19 and 120.
    randomResult = Math.floor(Math.random() * 102 + 19);
    //Change the inner html of randomNum to the random number we generated.
    $("#randomNum").html('Random Number: ' + randomResult);

    // Make variables for the random value of each crystal between 1 and 12.
    var num1 = Math.floor(Math.random() * 12 + 1);
    var num2 = Math.floor(Math.random() * 12 + 1);
    var num3 = Math.floor(Math.random() * 12 + 1);
    var num4 = Math.floor(Math.random() * 12 + 1);

    //Create a reset function
    function reset() {
        randomResult = Math.floor(Math.random() * 102 + 19);
        $("#randomNum").html('Random Number: ' + randomResult);
        num1 = Math.floor(Math.random() * 12 + 1);
        num2 = Math.floor(Math.random() * 12 + 1);
        num3 = Math.floor(Math.random() * 12 + 1);
        num4 = Math.floor(Math.random() * 12 + 1);
        userScore = 0;
    }
    reset();

    //Update the inner text of divs that hold wins and losses
    $('#winsText').text("Wins: " + wins);
    $('#lossesText').text("Losses: " + losses);
    //Display text in the win area telling the user that they win, increment wins by 1, change 
    //the inner text of the div for wins by displaying the newly updated win count.
    function win() {
        $('#win-area').text("You win!!!")
        wins++;
        $('#winsText').text("Wins: " + wins);
        reset();
    }
    //Display text in the lose area telling the user that they lose, increment losses by 1, change 
    //the inner text of the div for losses by displaying the newly updated lose count.
    function lose() {
        $('#win-area').text("You lose!!!")
        losses++;
        $('#lossesText').text("Losses: " + losses);
        reset();
    }

    //Each click will add the number value of the button to the users score.
    //If the user score is equal to the random number that was generated, 
    //call on the win function. If the score goes over the random number,
    //call on the lose function.
    $('#red').on("click", function () {

        userScore = num1 + userScore;
        if (userScore === randomResult) {
            win();
        }else if (userScore > randomResult) {
            lose();
        }

        $('#totalScore2').text(userScore)
    });
    $('#blue').on("click", function () {

        userScore = num2 + userScore;
        if (userScore === randomResult) {
            win();
        }else if (userScore > randomResult) {
            lose();
        }

        $('#totalScore2').text(userScore)
    });
    $('#white').on("click", function () {

        userScore = num3 + userScore;
        if (userScore === randomResult) {
            win();
        }else if (userScore > randomResult) {
            lose();
        }

        $('#totalScore2').text(userScore)
    });
    $('#yellow').on("click", function () {

        userScore = num4 + userScore;
        if (userScore === randomResult) {
            win();
        }else if (userScore > randomResult) {
            lose();
        }
        $('#totalScore2').text(userScore)
    });

});
