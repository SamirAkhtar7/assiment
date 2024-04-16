// Q4. Ask user for a total bill and also ask for number of diners, and display share of each diner.

const totalBill = parseInt(prompt("Enter total bill"));

const diners = parseInt(prompt("Enter number of diners"));

const share = Math.ceil(totalBill / diners);
alert(`your total bill is: ${totalBill} and number of diner is: ${diners} share of each dinears is : ${share}`);