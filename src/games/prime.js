import { getRandomInt } from '../utils';
import startGame from '../game-template';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number ** 0.5; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameStep = () => {
  const question = getRandomInt(100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const startPrimeGame = () => startGame(description, getGameStep);

export default startPrimeGame;
