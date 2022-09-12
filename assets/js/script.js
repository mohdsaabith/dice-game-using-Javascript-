var total1 =0;
var total2 = 0;

currentScore1 = 0;
currentScore2 = 0;

var i=0;


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
        let dieOneValue = Math.floor(Math.random()*6);
        diceScore1 = dieOneValue + 1;
        currentScore1 += diceScore1;
        if(currentScore1 >=25){
            alert("Player-1 won");
        }


        let dieTwoValue = Math.floor(Math.random()*6);
        diceScore2 = dieTwoValue + 1;
        currentScore2 += diceScore2;
        if(currentScore2 >= 25){
            alert("Player-2 won");
        }



        console.log(dieOneValue,dieTwoValue);

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src",images[dieTwoValue]);
   
        document.querySelector("#total-1").innerHTML = "Player-1 have " + (currentScore1);
        document.querySelector("#total-2").innerHTML = "Player-2 have " + (currentScore2 );
    },
    1000
    );
}