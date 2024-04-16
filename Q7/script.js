// Q7. Randomly toss a coin and ask user heads or tails,
// if its head display U win else display bad luck.
// (Assign two random numbers as head / tail)
 

let guess = prompt("please enter your choice heads and tails").toLowerCase();
let coin = parseInt(Math.random() * (2-1+1)+1)

let head = 1
let tail = 2
if (coin === head) { 
    console.log("U win")
}

else if (coin === tail) {
    console.log("Bad luck")
}