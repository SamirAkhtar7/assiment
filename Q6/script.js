// Q6. Ask user to input a number more than 600 and then display
//  square root of that number by 2 places of decimal.
 
let number = parseInt(prompt('enter the number more than 600'))
if (number > 600) {
    alert(Math.sqrt(number));
}
else {
    alert('please enter a number more than 600');
}