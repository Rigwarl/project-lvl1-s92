import { getRandomInt } from '../utils';
import startGame from '../game-template';

const description = 'Balance the given number.';

const sumDigits = number =>
  String(number).split('').reduce((acc, val) => acc + Number(val), 0);

const getAnswer = (number) => {
  const length = String(number).length;
  const digitsSum = sumDigits(number);

  const smallNumber = Math.floor(digitsSum / length);
  const bigNumbersCount = digitsSum % length;

  return Array.from({ length }, (el, i) =>
    (i >= length - bigNumbersCount ? smallNumber + 1 : smallNumber)).join('');
};

const getGameStep = () => {
  const question = getRandomInt(1000);
  const answer = getAnswer(question);

  return { question, answer };
};

const startBalanceGame = () => startGame(description, getGameStep);

export default startBalanceGame;
