import playGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 2) {
    return true;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const firstNumber = getNumber(1, 100);
  const task = String(firstNumber);
  const answer = isPrime(firstNumber) ? 'yes' : 'no';

  return [task, answer];
};

const startPrimeGame = () => {
  playGame(description, genGameData);
};

export default startPrimeGame;
