console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumber = Math.floor(Math.random() * 100);
console.log('Question:', randomNumber);
let userInput = prompt('Your answer:');
const checkEven = (randomNumber, userInput) => {
    if (randomNumber % 2 === 0 && userInput = 'yes') {
        console.log('Correct!');
    }
    if (randomNumber % 2 != 0 && userInput = 'no') {
        console.log('Correct!');
    } else {
        if (userInput = 'yes') {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        } else {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        }
        return console.log("Let's try again, Bill!");
    }
};
default export checkEven;
