console.log('What is the result of the expression?\n');
const randomNumber = () => {
    const number = Math.floor(Math.random() * 100);
    return number;
};
let numberOne = randomNumber();
let numberTwo = randomNumber();
const randomOperator = () => {
    const operators = ['+', '-', '*', "/"];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
};
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
};
let count = 0;
let answer = true;
const brainCalc = (count) => {
    let operator = randomOperator();
    console.log('Question:'numberOne, operator, numberTwo,\n);
    let userInput = prompt('Your answer:');
    console.log(\n);
    result = operCalc();
    if (userInput === result) {
        console.log('Correct!\n');
        count +=1;
        answer = true;
    } else {
        console.log("'"userInput"' is wrong answer ;(. Correct answer was '"result"'.\n Let's try again, ${naim}!\n");
        answer = false;
    }
    return count, answer;
};
while (count < 3 && answer === true) {
    brainCalc(count);
};
if (count === 2) {
    console.log('Congratulations, ' ${name}'!\n');
}

