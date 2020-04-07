import playGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const task = getNumber(1, 100);
  const answer = isPrime(task) ? 'yes' : 'no';

  return [String(task), answer];
};

const startPrimeGame = () => {
  playGame(description, genGameData);
};

export default startPrimeGame;
