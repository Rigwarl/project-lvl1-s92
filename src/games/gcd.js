import getRandomInt from '../random-int';
import startBrainGame from '../game-template';

const rules = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return calcGcd(b, a % b);
};

const getGame = () => {
  // прибавим единичку чтобы не думать о пограничных случаях с 0
  const a = getRandomInt(30) + 1;
  const b = getRandomInt(30) + 1;

  const question = `${a} ${b}`;
  const answer = String(calcGcd(a, b));

  return { question, answer };
};

const startGcdGame = () => startBrainGame(rules, getGame);

export default startGcdGame;
