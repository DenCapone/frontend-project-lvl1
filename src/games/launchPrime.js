import playtGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number <= 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genPrimeGame = () => {
  const firstNumber = getNumber(1, 100);
  const task = `${firstNumber}`;
  const answer = isPrimeNumber(firstNumber) ? 'yes' : 'no';

  return [task, answer];
};

const startPrimeGame = () => {
  playtGame(description, genPrimeGame);
};

export default startPrimeGame;
