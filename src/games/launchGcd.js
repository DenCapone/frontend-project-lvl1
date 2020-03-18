import { getNumber, startGame } from './gameFlow.js';

const objective = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) => {
  let result;
  const minNumber = firstNum < secondNum ? firstNum : secondNum; // get smallest number
  for (let i = 1; i <= minNumber; i += 1) {
    if ((firstNum % i === 0) && (secondNum % i === 0)) {
      result = i;
    }
  }
  return result;
};

const gcdGame = () => {
  const firstNumber = getNumber();
  const secondNumber = getNumber();
  const task = `${firstNumber} ${secondNumber}`;
  const answer = String(getGcd(firstNumber, secondNumber));
  return [task, answer];
};

const startGcdGame = () => {
  startGame(objective, gcdGame);
};

export default startGcdGame;
