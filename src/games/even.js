import { getRandomInt } from '../utils';
import startGame from '../game-template';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;
const getAnswer = number => (isEven(number) ? 'yes' : 'no');

const getGameStep = () => {
  const question = getRandomInt(100);
  const answer = getAnswer(question);

  return { question, answer };
};

const startEvenGame = () => startGame(description, getGameStep);

export default startEvenGame;
