
// Initial Variables
var computerPick = Math.floor(Math.random() * 101) + 19;
var nissanSpeed = Math.floor(Math.random() * 11) + 1;
var lamboSpeed = Math.floor(Math.random() * 11) + 1;
var amgSpeed = Math.floor(Math.random() * 11) + 1;
var r8Speed = Math.floor(Math.random() * 11) + 1;
var score = 0;


// This is the counter for wins/losses
var wins = 0;
var losses = 0;

// Testing with console.log

console.log("Computer Pick: " + computerPick);
console.log("Nissan Speed: " + nissanSpeed);
console.log("Lambo Speed: " + lamboSpeed);
console.log("Amg Speed: " + amgSpeed);
console.log("R8 Speed: " + r8Speed);
console.log("Score: " + score);


$("#target-random-number").text(computerPick);

$("#Nissan").attr("data-nissanvalue",nissanSpeed);
$("#Lambo").attr("data-lambovalue",lamboSpeed);
$("#Amg").attr("data-amgvalue",amgSpeed);
$("#R8").attr("data-R8value",r8Speed);


$("#Nissan","#Lambo","#Amg","#R8").on("click", function() {

var carPickedSpeed = ($(this).attr("data-nissanvalue"+"data-lambovalue"+"data-amgvalue"+"data-R8value"));


carPickedSpeed = parseInt(carPickedSpeed);


score += carPickedSpeed;

document.querySelector("#score").innerHTML = score;



//I need to add score + carPickedSpeed
//if score === computerPick -> Win
//else if score > computerPick -> loose
//otherwise the game continues



if (score === computerPick) {
wins++;
document.querySelector("#wins").innerHTML = wins;
}
    
else if (score > computerPick) {
losses++;
document.querySelector("#losses").innerHTML = wins;
}

});