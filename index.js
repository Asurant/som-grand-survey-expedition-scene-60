let liftButton = document.getElementById("liftButton")
let swoleCoinDisplay = document.getElementById("swoleCoinDisplay")

let increaseWeight = document.getElementById("increaseWeight")
let gymBro = document.getElementById("gymBro")
let jock = document.getElementById("jock")
let protein = document.getElementById("protein")
let altar = document.getElementById("altar")
let leave53 = document.getElementById("leave53")
let leave77 = document.getElementById("leave53")
let leave92 = document.getElementById("leave53")

let swoleCoins = 0;
let multiplier = 1;
let multiplierCost = 25;
let gymBros = 0;
let gymBroCost = 50;
let jocks = 0
let jockCost = 500
let proteins = 0
let porteinCost = 5000
let altars = 0
let altarCost = 50000

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
        gymBro.innerText = "Get a gym bro for " + Math.round(gymBroCost) + " Swole Coins";
    }else{
        alert("Not Enough Swole Coins")
    }
})

jock.addEventListener('click', function(){
    if(swoleCoins >= jockCost){
        swoleCoins -= jockCost
        jockCost *= 1.3
        jocks++
        displaySwoleCoinAmount()
        jock.innerText = "Get a jock for " + Math.round(jockCost) + " Swole Coins"
    }else{
        alert("Not Enough Swole Coins")
    }
})

protein.addEventListener('click', function(){
    if(swoleCoins >= proteinCost){
        swoleCoins -= proteinCost
        proteinCost *= 1.3
        proteins++
        displaySwoleCoinAmount()
        jock.innerText = "Get a protein powder factory for " + Math.round(jockCost) + " Swole Coins"
    }else{
        alert("Not Enough Swole Coins")
    }
})

altar.addEventListener('click', function(){
    if(swoleCoins >= altarCost){
        swoleCoins -= altarCost
        altarCost *= 1.3
        altars++
        displaySwoleCoinAmount()
        jock.innerText = "Get an Altar Of Swole for " + Math.round(jockCost) + " Swole Coins"
    }else{
        alert("Not Enough Swole Coins")
    }
})

setInterval(function(){
    swoleCoins += gymBros
    swoleCoins += (jocks * 10)
    swoleCoins += (proteins * 100)
    swoleCoins += (altars * 1000)
    displaySwoleCoinAmount()
},1000)