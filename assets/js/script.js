

currentScore1 = 0;
currentScore2 = 0;


//image of dice here
let images = ["./assets/images/dice-01.svg",
"./assets/images/dice-02.svg",
"./assets/images/dice-03.svg",
"./assets/images/dice-04.svg",
"./assets/images/dice-05.svg",
"./assets/images/dice-06.svg"];

//here we call the image from the hmtl 'dice' 
let dice = document.querySelectorAll("img");


// here the funtion to roll the dice
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake")
        });

        //here is the math random funtion it call's random number upto 6

        //Here we add the score of 1st dice
        let dieOneValue = Math.floor(Math.random()*6);
        diceScore1 = dieOneValue + 1;
        currentScore1 += diceScore1;
        //if the player-1 have scored 25 first. than, here is the function to screen the player-1 won
        if(currentScore1 >=25){
            document.querySelector("#result").innerHTML = "Player-1 won";
        }
        

        //Here we add the the score of 2nd dice
        let dieTwoValue = Math.floor(Math.random()*6);
        diceScore2 = dieTwoValue + 1;
        currentScore2 += diceScore2;
        //if the player-2 have scored 25 first. than, here is the function to screen the player-2 won
        if(currentScore2 >= 25){
            document.querySelector("#result").innerHTML = "Player-2 won";
        }



        console.log(dieOneValue,dieTwoValue);

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src",images[dieTwoValue]);
   
        //here the score display of both player
        document.querySelector("#total-1").innerHTML = "Player-1 have " + (currentScore1);
        document.querySelector("#total-2").innerHTML = "Player-2 have " + (currentScore2 );
    },
    1000
    );
}

//here is the reset button
function reset(){
    var total1 =0;
    var total2 = 0;

    currentScore1 = 0;
    currentScore2 = 0;

    // here we make the score again 0
    document.querySelector("#total-1").innerHTML = "Player-1 have " + 0 ;
    document.querySelector("#total-2").innerHTML = "Player-2 have " + 0  ;

    //here we disappear who won
    document.querySelector("#result").innerHTML = null;
}