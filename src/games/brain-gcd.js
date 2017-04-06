import getRandomInt from '../random-int';
import startBrainGame from '../game-template';

const showRules = () => console.log('Find the greatest common divisor of given numbers.');

// прибавим единичку чтобы не думать о пограничных случаях с 0
const getRandomNumbers = () => `${getRandomInt(30) + 1} ${getRandomInt(30) + 1}`;

const calcGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return calcGcd(b, a % b);
};

const calcResult = (numbers) => {
  const [a, b] = numbers.split(' ').map(Number);

  return String(calcGcd(a, b));
};

const startGcdGame = () => startBrainGame(showRules, getRandomNumbers, calcResult);

export default startGcdGame;
