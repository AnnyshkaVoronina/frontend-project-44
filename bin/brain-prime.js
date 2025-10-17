import readlineSync from  'readline-sync';
const randomNumber = () => {
    const number = Math.floor(0 + Math.random() * (100 - 0 + 1));
    return number;
}

const checkPrimeNumber = (number) => {
    if (number < 2) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    if (number %= 2 === 0) {
        return false;
    } else {
        let i = number;
        if (i > 3 && i < Math.sqrt(number)) {
            if (number % Math.sqrt(number) === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}

function brainPrime () {
    console.log('Welcome to the Brain Prime!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    let count = 3;
    for (let i = 0; i < count; i +=1) {
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
        let randomNumber = randomNumber();
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === "yes" && correctAnswer === true || userAnswer === "no" && correctAnswer === false) {
            console.log(`Correct!`);
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`)
}
brainPrime ();