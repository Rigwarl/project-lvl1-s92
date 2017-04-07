import { getRandomInt } from '../utils';
import startGame from '../game-template';

const rules = 'What is the result of the expression?';

const getGameStep = () => {
  const left = getRandomInt(20);
  const right = getRandomInt(20);

  let operation = null;
  let answer = null;

  switch (getRandomInt(3)) {
    case 0:
      operation = '+';
      answer = left + right;
      break;
    case 1:
      operation = '-';
      answer = left - right;
      break;
    case 2:
      operation = '*';
      answer = left * right;
      break;
    default:
      break;
  }

  const question = `${left} ${operation} ${right}`;
  answer = String(answer);

  return { question, answer };
};

const startCalcGame = () => startGame(rules, getGameStep);

export default startCalcGame;
