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

const startBrainGame = (showRules, getQuestion, getAnswer) => {
  showWelcome();
  showRules();
  console.log('');

  const name = askName();
  showGreeting(name);
  console.log('');

  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    showQuestion(question);

    const answer = askAnswer();
    const rightAnswer = getAnswer(question);

    if (answer !== rightAnswer) {
      showAnswerWrong(answer, rightAnswer);
      showTryAgain(name);
      return;
    }

    showCorrect();
  }

  showCongratulations(name);
};

export default startBrainGame;
