import { getRandomInt } from '../utils';
import startGame from '../game-template';

const description = 'What number is missing in this progression?';
const progressionLength = 10;

const getProgression = () => {
  const first = getRandomInt(20);
  const factor = getRandomInt(15) + 1;

  return Array.from({ length: progressionLength }, (el, i) => first + (i * factor));
};

const getGameStep = () => {
  const progressionArr = getProgression();
  const missingIndex = getRandomInt(progressionLength);

  const questionArr = [...progressionArr];
  questionArr[missingIndex] = '..';

  const question = questionArr.join(' ');
  const answer = String(progressionArr[missingIndex]);

  return { question, answer };
};

const startProgressionGame = () => startGame(description, getGameStep);

export default startProgressionGame;
