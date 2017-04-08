import { getRandomInt } from '../utils';
import startGame from '../game-template';

const description = 'What is the result of the expression?';

const getGameStep = () => {
  const left = getRandomInt(20);
  const right = getRandomInt(20);

  switch (getRandomInt(3)) {
    case 0:
      return {
        question: `${left} + ${right}`,
        answer: String(left + right),
      };
    case 1:
      return {
        question: `${left} - ${right}`,
        answer: String(left - right),
      };
    case 2:
      return {
        question: `${left} * ${right}`,
        answer: String(left * right),
      };
    default:
      return null;
  }
};

const startCalcGame = () => startGame(description, getGameStep);

export default startCalcGame;
