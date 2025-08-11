import readlineSync from 'readline-sync';
const element = (start, index, step) => {
    const currentElement = start + index * step;
    return currentElement;
}
function brainProgression() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`)
    console.log(`What number is missing in the progression?`);
    let count = 3;
    for (let i = 0; i < count; i += 1) {
        let elements = [];
        const min = 5;
        const max = 10;
        const countElements = Math.random() * (max - min) + min;
        elements[0] = Math.random() * (100 - 1) + 1;
        const step = Math.random() * (100 - 1) + 1;
        for (let n = 1; n < countElements; n += 1) {
            elements[n] = element(elements[0], n, step);
        }
        const randomIndex = Math.floor(Math.random() * elements.length);
        const newArray =  elements.map((item, index) => {
            return index === randomIndex ? '...' : item;
        });
        console.log(`Question: ${newArray}`);
        const userAnswer = readlineSync.question(`Your answer: `);
        const currentAnswer = elements[randomIndex];
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
brainProgression();