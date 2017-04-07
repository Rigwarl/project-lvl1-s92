import { getRandomInt } from '../utils';
import startBrainGame from '../game-template';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;
const getAnswer = number => (isEven(number) ? 'yes' : 'no');

const getGame = () => {
  const question = getRandomInt(100);
  const answer = getAnswer(question);

  return { question, answer };
};

const startEvenGame = () => startBrainGame(rules, getGame);

export default startEvenGame;
