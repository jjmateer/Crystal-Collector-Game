//Create variables
var randomResult;
var wins = 0;
var losses = 0;
var userScore = 0;

//A game with 4 crystals and a random result

//Create random number that you have to guess is between 19 and 120
randomResult = Math.floor(Math.random() * 120) + 1;
$("#randomNum").html('Random Number: ' + randomResult);


// Every crystal needs to have a random number between 1 and 12
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12) + 1;
    console.log(random);
   
    var crystal = $('<button>', '</button>');

    crystal.attr({
        "class": 'crystal',
    });

    $(".crystals").append(crystal);
    $(".crystal").push(random);
    
}

//When the player clicks on a crystal, it will add a specific amount of points to the players total score.
$('.crystal').on("click", function() {

userScore =  random + userScore;
   

$('#totalScore2').text(userScore)
})


//If the total score matches the random number, then the player wins.


//The player loses if their score goes above the random number.

//The game restarts whenever the player wins of loses.

// Show the number of games the player wins and loses.

