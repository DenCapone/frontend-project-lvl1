import playGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'What is the result of the expression?';

const genGameData = () => {
  const firstNumber = getNumber(1, 100);
  const secondNumber = getNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getNumber(0, operators.length - 1)];
  const task = `${firstNumber} ${operator} ${secondNumber}`;
  let answer;

  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return [task, String(answer)];
};

const startCalculateGame = () => {
  playGame(description, genGameData);
};

export default startCalculateGame;
