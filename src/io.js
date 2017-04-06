import readlineSync from 'readline-sync';

export const askName = () => readlineSync.question('May I have your name? ');
export const askAnswer = () => readlineSync.question('Your answer: ');

export const showWelcome = () => console.log('Welcome to the Brain Games!');
export const showGreeting = name => console.log(`Hello, ${name}!`);
export const showQuestion = question => console.log(`Question: ${question}`);
export const showAnswerWrong = (answer, rightAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
export const showTryAgain = name => console.log(`Let's try again, ${name}!`);
export const showCorrect = () => console.log('Correct!');
export const showCongratulations = name => console.log(`Congratulations, ${name}!`);
