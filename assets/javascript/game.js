


// Initial Variables

var computerPick = Math.floor(Math.random() * 101) + 19;
var nissanSpeed = Math.floor(Math.random() * 11) + 1;
var lamboSpeed = Math.floor(Math.random() * 11) + 1;
var amgSpeed = Math.floor(Math.random() * 11) + 1;
var r8Speed = Math.floor(Math.random() * 11) + 1;
var score = nissanSpeed + lamboSpeed + amgSpeed + r8Speed; //0
console.log("Computer score: " + score)

// This is the counter for wins/losses
var wins = 0;
var losses = 0;

console.log("Computer Pick: " + computerPick);
console.log("Computer Pick: " + nissanSpeed);
console.log("Computer Pick: " + lamboSpeed);
console.log("Computer Pick: " + amgSpeed);
console.log("Computer Pick: " + r8Speed);

$("#target-random-number").text(computerPick);

// You are going to add score + carPickedSpeed
// if score === computerPick -> Win
// else if score > computerPick -> loose
// otherwise the game continues

if (score === computerPick) {
wins++;
    document.querySelector("#wins").innerHTML = wins;
}
    
if (score >= computerPick) {
    losses++;
        document.querySelector("#losses").innerHTML = wins;
    }

