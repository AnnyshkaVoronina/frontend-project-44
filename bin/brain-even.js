import readlineSync from  'readline-sync';
const isEven = (num) => num % 2 === 0;

function evenGame() {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let count = 3;

    for(let i = 0; i < count; i++) {
        const randomNumber = Math.floor(0 + Math.random() * (100 - 0 + 1));
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const currentAnswer = isEven(randomNumber) ? 'yes' : 'no';
    
        if (currentAnswer === userAnswer) {
            console.log('Correct!');
        } else {
            console.log(
            `'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'. Let's try again, ${name}!`);

        return;
        }
    }

    console.log(`Congratulations, ${name}!`);
}

evenGame();