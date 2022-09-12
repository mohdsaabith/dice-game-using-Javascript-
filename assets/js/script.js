
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
        let dieTwoValue = Math.floor(Math.random()*6);

        console.log(dieOneValue,dieTwoValue);

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src",images[dieTwoValue]);
   
        document.querySelector("#total-1").innerHTML = "Player-1 have " + (dieOneValue + 1);
        document.querySelector("#total-2").innerHTML = "Player-2 have " + (dieTwoValue + 1 );
    },
    1000
    );
}