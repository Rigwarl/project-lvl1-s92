import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * 100);
const isEven = number => number % 2 === 0;
const isRightEvenAnswer = (answer, number) => (isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no');

const askName = () => readlineSync.question('May I have your name? ');
const askAnswer = () => readlineSync.question('Your answer: ');

const showWelcome = () => console.log('Welcome to the Brain Games!');
const showGreeting = name => console.log(`Hello, ${name}!`);
const showEvenRules = () => console.log('Answer "yes" if number even otherwise answer "no".');
const showQuestion = question => console.log(`Question: ${question}`);
const showAnswerWrong = (answer, rightAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
const showTryAgain = name => console.log(`Let's try again, ${name}!`);
const showCorrect = () => console.log('Correct!');
const showCongratulations = name => console.log(`Congratulations, ${name}!`);

export const startIndexGame = () => {
  showWelcome();
  console.log('');

  const name = askName();
  showGreeting(name);
};

export const startEvenGame = () => {
  showWelcome();
  showEvenRules();
  console.log('');

  const name = askName();
  showGreeting(name);
  console.log('');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    showQuestion(number);

    const answer = askAnswer();

    if (!isRightEvenAnswer(answer, number)) {
      showAnswerWrong(answer, isEven(number) ? 'yes' : 'no');
      showTryAgain(name);
      return;
    }

    showCorrect();
  }

  showCongratulations(name);
};
