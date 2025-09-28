let liftButton = document.getElementById("liftButton")
let swoleCoinDisplay = document.getElementById("swoleCoinDisplay")

let increaseWeight = document.getElementById("increaseWeight")
let gymBro = document.getElementById("gymBro")

let swoleCoins = 0;
let multiplier = 1;
let multiplierCost = 25;
let gymBros = 0;
let gymBroCost = 50;

function displaySwoleCoinAmount(){
    swoleCoinDisplay.innerText = "You have " + Math.round(swoleCoins) + " Swole Coins";
}

liftButton.addEventListener('click', function(){
    swoleCoins += multiplier;
    displaySwoleCoinAmount()
})

increaseWeight.addEventListener('click', function(){
    if(swoleCoins>= multiplierCost){
        swoleCoins-= multiplierCost;
        multiplierCost*=1.3;
        multiplier++;
        displaySwoleCoinAmount()
        increaseWeight.innerText = "Increase weight for " + Math.round(multiplierCost) + " Swole Coins";
    }else{
        alert("Not Enough Swole Coins")
    }
})

gymBro.addEventListener('click', function(){
    if(swoleCoins>= gymBroCost){
        swoleCoins-= gymBroCost;
        gymBroCost*=1.3;
        gymBros++;
        displaySwoleCoinAmount()
        gymBro.innerText = "Get some gym bros for " + Math.round(gymBroCost) + " Swole Coins";
    }else{
        alert("Not Enough Swole Coins")
    }
})

setInterval(function(){
    swoleCoins += gymBros
    displaySwoleCoinAmount()
},1000)