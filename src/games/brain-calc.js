import getRandomInt from '../random-int';
import startBrainGame from '../game-template';

const rules = 'What is the result of the expression?';

const calcExpression = (left, right, operation) => {
  switch (operation) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    default:
  }

  return NaN;
};

const operations = ['+', '-', '*'];

const getQuestion = () => {
  const left = getRandomInt(20);
  const right = getRandomInt(20);
  const operation = operations[getRandomInt(3)];

  const question = `${left} ${operation} ${right}`;
  const answer = String(calcExpression(left, right, operation));

  return { question, answer };
};

const startCalcGame = () => startBrainGame(rules, getQuestion);

export default startCalcGame;
