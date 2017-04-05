import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

const askEvenQuestion = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  const isEven = number % 2 === 0;
  const result = (answer === 'yes' && isEven) || (answer === 'no' && !isEven);

  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'`);
  }

  return result;
};

export const startIndexGame = () => {
  console.log('Welcome to the Brain Games!\n');
  askName();
};

export const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const name = askName();

  for (let i = 0; i < 3; i += 1) {
    if (!askEvenQuestion()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
