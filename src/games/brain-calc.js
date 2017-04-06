import getRandomInt from '../random-int';
import startBrainGame from '../game-template';

const operations = ['+', '-', '*'];

const showRules = () => console.log('What is the result of the expression?');

const getRandomExpression = () => `${getRandomInt(20)} ${operations[getRandomInt(3)]} ${getRandomInt(20)}`;

const calcExpression = (expression) => {
  const [left, operation, right] = expression.split(' ');
  let result = Number(left);

  switch (operation) {
    case '+':
      result += Number(right);
      break;
    case '-':
      result -= Number(right);
      break;
    case '*':
      result *= Number(right);
      break;
    default:
      result = NaN;
      break;
  }

  return String(result);
};

const startCalcGame = () => startBrainGame(showRules, getRandomExpression, calcExpression);

export default startCalcGame;
