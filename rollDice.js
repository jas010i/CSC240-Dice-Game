

// This is the main function that will "roll the dice" and award points---------------------------->
//      and winners based on corresponding results.

function rollDice() {

// Here we are declaring the variables that will be called upon later on in the code.-------------->
//      d1-d6 refer to a value, and that value is assigned to an image.
    var d1 = document.getElementById("dice1");
    var d2 = document.getElementById("dice2");
    var d3 = document.getElementById("dice3");
    var d4 = document.getElementById("dice4");
    var d5 = document.getElementById("dice5");
    var d6 = document.getElementById("dice6");

// Here we declare an array that will hold the local variables d1-d6.------------------------------>
    var array = [d1, d2, d3, d4, d5, d6];

// Here is where the variables called will generate a random number for the dice roll by----------->
//      using the Math.random() function multiplied by the length of the array and adding
//      +1 at the end to ensure we do not end up with any 0's.
    var rollResultPlayer = Math.floor(Math.random() * array.length + 1);
    var rollResultPlayer2 = Math.floor(Math.random() * array.length + 1);

        // Here we gather the sum of both dice to help determine a winner.
            var totalRollPlayer = (rollResultPlayer + rollResultPlayer2);

    var rollResultComputer = Math.floor(Math.random() * array.length + 1);
    var rollResultComputer2 = Math.floor(Math.random() * array.length + 1);

        // Here we gather the sum of both dice to help determine a winner.
            var totalRollComputer = (rollResultComputer + rollResultComputer2);

// Here we are declaring two variables that will gather how many wins each player has.------------->
    var playerPointHolder = document.getElementById("p-point-holder");
    var computerPointHolder = document.getElementById("c-point-holder");

// Here is where the function decides what image to call after the random number has--------------->
//      been generated.
    document.getElementById("dice-results1").src = "diceImage/dice" + rollResultPlayer + ".png";
    document.getElementById("dice-results2").src = "diceImage/dice" + rollResultPlayer2 + ".png";
    document.getElementById("c-dice-results1").src = "diceImage/dice" + rollResultComputer + ".png";
    document.getElementById("c-dice-results2").src = "diceImage/dice" + rollResultComputer2 + ".png";
    
// Here we start with the decision statements. The basic scenario is if x < y; x gets +1----------->
//      and vice-versa, except in the case that x == y, then no points are awarded.
        if(totalRollPlayer < totalRollComputer)
            {
                computerPointHolder.innerHTML = Number(computerPointHolder.innerHTML) + 1;
                document.getElementById("p-winlose").innerHTML = 
                    "You lost this round. Try again."
            }
                else if(totalRollPlayer > totalRollComputer)
                    {
                        playerPointHolder.innerHTML = Number(playerPointHolder.innerHTML) + 1;
                        document.getElementById("p-winlose").innerHTML = 
                            "You won this round! Keep at it!"
                    }
                            else if(totalRollPlayer == totalRollComputer)
                                {
                                    document.getElementById("t-winlose").innerHTML = 
                                        "Oops! Looks like it's a tie! No points for anyone."
                                }
                    
// In this decision loop the function looks at the results of the roll and determines-------------->
//      whether or not an additional point needs to be awarded.
        if(rollResultPlayer == rollResultPlayer2 && totalRollPlayer > totalRollComputer)
            {
                playerPointHolder.innerHTML = Number(playerPointHolder.innerHTML) + 1;
                document.getElementById("p-dblwin").innerHTML = 
                    "Wow! You rolled a double AND won the round! Have an extra point on us!"
            }
                else if(rollResultPlayer == rollResultPlayer2 && totalRollPlayer < totalRollComputer)
                    {
                        document.getElementById("p-dblwin").innerHTML = 
                            "Aww shucks! You rolled a double, but didn't win the round. No extra points for you."
                    }
                        else if(rollResultComputer == rollResultComputer2 && totalRollComputer > totalRollPlayer)
                            {
                                computerPointHolder.innerHTML = Number(computerPointHolder.innerHTML) + 1;
                                document.getElementById("p-dblwin").innerHTML = 
                                    "Your opponent rolled a double AND won the round... sorry but we have to give them an extra point."
                            }
                                else if(rollResultComputer == rollResultComputer2 && totalRollComputer < totalRollPlayer)
                                    {
                                        document.getElementById("p-dblwin").innerHTML = 
                                            "That was a close one! Your opponent rolled a double, but did not win. No extra points for them."
                                    }
                                        else if(rollResultPlayer != rollResultPlayer2)
                                            {
                                                document.getElementById("p-dblwin").innerHTML = ""; // This is to clear the field
                                            }
                                                else if(rollResultComputer != rollResultComputer2)
                                                    {
                                                        document.getElementById("p-dblwin").innerHTML = ""; // This is to clear the field
                                                    }

// This decision statement looks at the respective pointholders and sends out a-------------------->
//      message if any of the players reach 100pts.
        if(playerPointHolder.innerHTML >= 100)
            {
                document.getElementById("text-continue").innerHTML = 
                        "Game Over! You win!";
                document.getElementById("text-continue").style.top = "0";
                document.getElementById("btn-quit").style.top = "40%";
                document.getElementById("btn-continue").style.top = "40%";


            }
                else if(computerPointHolder.innerHTML >= 100)
                    {
                        document.getElementById("text-continue").innerHTML = 
                            "Game Over! You lose."
                        document.getElementById("text-continue").style.top = "0";
                        document.getElementById("btn-quit").style.top = "40%";
                        document.getElementById("btn-continue").style.top = "40%";    
                    }



        if(playerPointHolder.innerHTML > computerPointHolder.innerHTML)
                {
                    document.getElementById("p-point-holder").style.color = "white";
                    document.getElementById("p-point-holder").style.transform = "scale(1.4)";
                }
                    else if(computerPointHolder.innerHTML > playerPointHolder.innerHTML)
                        {
                            document.getElementById("c-point-holder").style.color = "white";
                            document.getElementById("c-point-holder").style.transform = "scale(1.4)";
                        }
            


        if(playerPointHolder.innerHTML < computerPointHolder.innerHTML)
                {
                    document.getElementById("p-point-holder").style.color = "rgba(18, 174, 201, 0.671)";
                    document.getElementById("p-point-holder").style.transform = "scale(1.0)";
                }
                    else if(computerPointHolder.innerHTML < playerPointHolder.innerHTML)
                        {
                            document.getElementById("c-point-holder").style.color = "rgba(18, 174, 201, 0.671)";
                            document.getElementById("c-point-holder").style.transform = "scale(1.0)";
                        }
        


        if(playerPointHolder.innerHTML == computerPointHolder.innerHTML)
                    {
                        document.getElementById("c-point-holder").style.color = "rgba(18, 174, 201, 0.671)";
                        document.getElementById("p-point-holder").style.color = "rgba(18, 174, 201, 0.671)";
                        document.getElementById("p-point-holder").style.transform = "scale(1.0)";
                        document.getElementById("c-point-holder").style.transform = "scale(1.0)";
                    }


// This section sends out the information to the HTML page and displays---------------------------->
//      it in the corresponding locations.
    document.getElementById("dice-results1").innerHTML = rollResultPlayer;    
    document.getElementById("dice-results2").innerHTML = rollResultPlayer2;
            document.getElementById("player-points").innerHTML = (totalRollPlayer);

    document.getElementById("c-dice-results1").innerHTML = rollResultComputer;
    document.getElementById("c-dice-results2").innerHTML = rollResultComputer2;
            document.getElementById("computer-points").innerHTML = (totalRollComputer);

}

function continueGame() {
    document.getElementById("text-quit").style.display = "none";
    document.getElementById("text-continue").style.display = "none";
    document.getElementById("btn-continue").style.display = "none";
    document.getElementById("btn-quit").style.display = "none";                    
}

function quitGame() {
    location.reload();
}

// This function will serve to reload the game by essentially refreshing the page.----------------->
function quitGame() {

    location.reload();

}