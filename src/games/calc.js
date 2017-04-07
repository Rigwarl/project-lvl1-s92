import { getRandomInt } from '../utils';
import startGame from '../game-template';

const description = 'What is the result of the expression?';

const getGameStep = () => {
  const left = getRandomInt(20);
  const right = getRandomInt(20);

  let question = '';
  let answer = '';

  switch (getRandomInt(3)) {
    case 0:
      question = `${left} + ${right}`;
      answer = String(left + right);
      break;
    case 1:
      question = `${left} - ${right}`;
      answer = String(left - right);
      break;
    case 2:
      question = `${left} * ${right}`;
      answer = String(left * right);
      break;
    default:
      break;
  }

  return { question, answer };
};

const startCalcGame = () => startGame(description, getGameStep);

export default startCalcGame;
