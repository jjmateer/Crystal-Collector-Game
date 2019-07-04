//Create variables
var randomResult;
var wins = 0;
var losses = 0;
var userScore = "";

//A game with 4 crystals and a random result

//Create random number that you have to guess is between 19 and 120
randomResult = Math.floor(Math.random() * 120) + 1;
$("#randomNum").html('Random Number: ' + randomResult);


// Every crystal needs to have a random number between 1 and 12
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() *  12);
    console.log(random);

    var crystal = $('<btn-lg>');
    crystal.attr({
        "class": 'crystal',
        "data-random": random
        
    });
    $(".crystals").append(crystal);


}

//When the player clicks on a crystal, it will add a specific amount of points to the plays total score.
    $("crystal").click(function(){
        userScore = userScore + crystal;
        
        console.log(crystal);
    
    });
    

//If the total score matches the random number, then the player wins.

//The player loses if their score goes above the random number.

//The game restarts whenever the player wins of loses.

// Show the number of games the player wins and loses.

   