import { getNumber, startGame } from './gameFlow.js';

const objective = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number <= 2) {
    return 'yes';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = () => {
  const firstNumber = getNumber();
  const task = `${firstNumber}`;
  const answer = isPrimeNumber(firstNumber);

  return [task, answer];
};

const startPrimeGame = () => {
  startGame(objective, primeGame);
};

export default startPrimeGame;
