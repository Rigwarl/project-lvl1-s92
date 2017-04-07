import { showWelcome, showGreeting, askName } from '../io';

const startGreetGame = () => {
  showWelcome();
  console.log('');

  const name = askName();
  showGreeting(name);
};

export default startGreetGame;
