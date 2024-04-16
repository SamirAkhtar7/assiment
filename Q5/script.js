// Q5:- Ask user their a line from their favourite poem and display number of letters
//  in that line.Further, as a starting and ending value from user and display subsection
//   of that poem based on starting and ending value

let poemLine = prompt("Please enter your a line from their favourite poem").toString();
// console.log(poemLine)
let letters = poemLine.split(" ").join("");
// console.log(letters);

let start = prompt("Please enter the starting value");
let end = prompt("Please enter the ending value");

let subsection = letters.slice(start, end)
console.log(subsection);
alert(`${poemLine}, ${start}, ${end} ,${subsection}`)
