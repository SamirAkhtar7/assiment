// Q1. Create a guest list for a summer party and verify  coming people whether they are allowed or not.



let guessList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",]
let guess = prompt("Please enter your name").toLowerCase();

function guessLetter() {
    for (let i = 0; i < guessList.length; i++) {
        if (guessList[i] === guess) {
            alert("You are allowed to enter summer party");
            break;
        }
        else {
            alert("You are not allowed to enter summer party !");
            break;
        }
   
    }
}
guessLetter();
