import getRandomInt from '../random-int';
import startBrainGame from '../game-template';

const showRules = () => console.log('Answer "yes" if number even otherwise answer "no".');

const getAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

const startEvenGame = () => startBrainGame(showRules, getRandomInt, getAnswer);

export default startEvenGame;
