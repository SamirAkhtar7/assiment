// Q8. Ask user to tell how many days till next sunday. then display how many hours,
//  minutes and seconds are there in those days
let daysToDisplay = prompt(" how many days till next sunday");

let days = daysToDisplay * 24 * 60 * 60 * 1000;

let date = new Date();

date.setTime(date.getTime() + days);

let hours = date.getHours();

let minutes = date.getMinutes();

let seconds = date.getSeconds();

alert(
  "in " + daysToDisplay + " days, " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds"
);