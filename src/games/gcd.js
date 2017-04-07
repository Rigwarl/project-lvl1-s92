import { getRandomInt } from '../utils';
import startGame from '../game-template';

const rules = 'Find the greatest common divisor of given numbers.';

const getAnswer = (a, b) => {
  if (b === 0) {
    return String(a);
  }

  return getAnswer(b, a % b);
};

const getGameStep = () => {
  // прибавим единичку чтобы не думать о пограничных случаях с 0
  const a = getRandomInt(30) + 1;
  const b = getRandomInt(30) + 1;

  const question = `${a} ${b}`;
  const answer = getAnswer(a, b);

  return { question, answer };
};

const startGcdGame = () => startGame(rules, getGameStep);

export default startGcdGame;
