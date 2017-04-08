import { getRandomInt } from '../utils';
import startGame from '../game-template';

const description = 'Balance the given number.';

const sumDigits = (number) => {
  const numberStr = String(number);
  let sum = 0;

  for (let i = 0; i < numberStr.length; i += 1) {
    sum += Number(numberStr[i]);
  }

  return sum;
};

const getAnswer = (number) => {
  const length = String(number).length;
  const digitsSum = sumDigits(number);

  const base = Math.floor(digitsSum / length);
  const rest = digitsSum % length;

  let answer = '';

  for (let i = 0; i < length; i += 1) {
    const needUp = i >= length - rest;
    answer += needUp ? base + 1 : base;
  }

  return answer;
};

const getGameStep = () => {
  const question = getRandomInt(1000);
  const answer = getAnswer(question);

  return { question, answer };
};

const startBalanceGame = () => startGame(description, getGameStep);

export default startBalanceGame;
