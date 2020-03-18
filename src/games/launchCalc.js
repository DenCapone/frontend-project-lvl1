
import { getNumber, startGame } from './gameFlow.js';

const objective = 'What is the result of the expression?';

const calculateGame = () => {
  const firstNumber = getNumber();
  const secondNumber = getNumber();
  const operators = ['+', '-', '*'];
  const getOperator = operators[Math.floor(Math.random() * operators.length)];
  const task = `${firstNumber} ${getOperator} ${secondNumber}`;
  let answer;

  switch (getOperator) {
    case '+':
      answer = String(firstNumber + secondNumber);
      break;
    case '-':
      answer = String(firstNumber - secondNumber);
      break;
    case '*':
      answer = String(firstNumber * secondNumber);
      break;
    default:
      break;
  }
  return [task, answer];
};

const startCalculateGame = () => {
  startGame(objective, calculateGame);
};

export default startCalculateGame;
