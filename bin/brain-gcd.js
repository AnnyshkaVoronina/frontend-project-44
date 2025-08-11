import readlineSync from  'readline-sync';
const randomNumber = () => {
    const number = Math.floor(0 + Math.random() * (100 - 0 + 1));
    return number;
}
const GCD = (a, b) => {
    if (b === 0) {
        return a;
    }
    let temp;
    while (b != 0) {
        temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}
function brainGCD {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`)
    console.log(`Find the greatest common divisor of given numbers.`);
    let count = 3;
    for (let i = 0; i < count; i += 1) {
        const randomNumberOne = randomNumber();
        const randomNumberTwo = randomNumber();
        consple.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
        const userAnswer = readlineSync.question(`Your answer: `);
        const currentAnswer = GCD(randomNumberOne, randomNumberTwo);
        if (userAnswer === currentAnswer) {
            console.log(`Correct!`);
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
brainGCD();