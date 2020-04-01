import playGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) => {
  let result = 1;
  const minNumber = firstNum < secondNum ? firstNum : secondNum; // get smallest number
  for (let i = 1; i <= minNumber; i += 1) {
    if ((firstNum % i === 0) && (secondNum % i === 0)) {
      result = i;
    }
  }
  return result;
};

const genGameData = () => {
  const firstNumber = getNumber(1, 100);
  const secondNumber = getNumber(1, 100);
  const task = `${firstNumber} ${secondNumber}`;
  const answer = String(getGcd(firstNumber, secondNumber));
  return [task, answer];
};

const startGcdGame = () => {
  playGame(description, genGameData);
};

export default startGcdGame;
