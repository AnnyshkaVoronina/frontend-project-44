import readlineSync from  'readline-sync';

const randomNumber = () => {
    const number = Math.floor(0 + Math.random() * (100 - 0 + 1));
    return number;
}
const randomOperator = () => {
    const operators = ['+', '-', '*', "/"];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
}
const operCalc = (numberOne, operator, numberTwo) => {
    let result = 0;
    switch (operator) {
        case '+':
            result = numberOne + numberTwo;
            break;
        case '-':
            result = numberOne - numberTwo;
            break;
        case '*':
            result = numberOne * numberTwo;
            break;
        case '/':
            result = numberOne / numberTwo;
            break;
    }
    return result;
}

function brainCalc () {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`)
    let count = 3;
    for (let i = 0; i < count; i +=1) {
        console.log('What is the result of the expression?\n');
        let randomNumberOne = randomNumber();
        let randomNumberTwo = randomNumber();
        let operator = randomOperator;
        console.log(`Question: ${randomNumberOne}${operator}${randomNumberTwo}`);
        const userAnswer = readlineSync.question('Your answer: ');
        let correctAnswer = operCalc(randomNumberOne, operator, randomNumberTwo); 
        if (userAnswer === correctAnswer) {
            console.log(`Correct!`);
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`)
}
brainCalc();
