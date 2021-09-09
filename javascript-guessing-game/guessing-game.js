
var numOfwon = 0;
var numOflost = 0;


for (var i = 1; i <= 5; i++) {
    var guessingNumber = parseFloat(prompt("Enter a number from 1 to 5 :"));
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    if (guessingNumber == randomNumber) {
        console.log('You won the game');
        numOfwon++;
    }
    else {
        console.log('You lost the game .The Random number is ', randomNumber);
        numOflost++;
    }
}
document.write("Number of won =", numOfwon, "<br>");
document.write("Number of lost =", numOflost, "<br>");