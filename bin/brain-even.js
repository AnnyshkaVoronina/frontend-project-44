console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumber = Math.floor(Math.random() * 100);
console.log('Question:', randomNumber);
let userInput = prompt('Your answer:');
var i = 0;
let numberOfCorrectAnswer = 0;
const checkEven = (randomNumber, userInput, status, numberOfCorrectAnswer) => {
    if (randomNumber % 2 === 0 && userInput === 'yes') {
        console.log('Correct!');
        numberOfCorrectAnswer += 1;
    }
    if (randomNumber % 2 != 0 && userInput === 'no') {
        console.log('Correct!');
        numberOfCorrectAnswer += 1;
    } else {
        if (userInput === 'yes') {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        } else {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        }
        status = false;
        return console.log("Let's try again, ${name}!"), status;
    }
    return status, numberOfCorrectAnswer;
};

do {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Question:', randomNumber);
    let userInput = prompt('Your answer:');
    let status = true;
    checkEven (randomNumber, userInput, status, numberOfCorrectAnswer);
} while (status === 'true' && i < 2);
if (numberOfCorrectAnswer === 3) {
    console.log ('Congratulations, Sam!');
}