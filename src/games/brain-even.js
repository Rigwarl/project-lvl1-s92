import getRandomInt from '../random-int';
import startBrainGame from '../game-template';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const getAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

const startEvenGame = () => startBrainGame(rules, getRandomInt, getAnswer);

export default startEvenGame;
