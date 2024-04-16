// Generate a lucky number upto 10 and prompt user to guess the number





const randomNumber = parseInt(Math.random() * 10 + 1)
// console.log(randomNumber);

const guess = parseInt(prompt('Guess the number between 1 and 10'))

if (guess === randomNumber) {
    alert('you are correct ')
}
else {
    alert('you are wrong')
}