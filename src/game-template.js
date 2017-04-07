import {
  showWelcome,
  showGreeting,
  askName,
  showQuestion,
  showAnswerWrong,
  showTryAgain,
  showCorrect,
  showCongratulations,
  askAnswer,
} from './io';

const startGame = (description, getGameStep, stepsCount = 3) => {
  showWelcome();
  console.log(description);
  console.log('');

  const name = askName();
  showGreeting(name);
  console.log('');

  for (let i = 0; i < stepsCount; i += 1) {
    const { question, answer } = getGameStep();
    showQuestion(question);

    const userAnswer = askAnswer();

    if (userAnswer !== answer) {
      showAnswerWrong(userAnswer, answer);
      showTryAgain(name);
      return;
    }

    showCorrect();
  }

  showCongratulations(name);
};

export default startGame;
