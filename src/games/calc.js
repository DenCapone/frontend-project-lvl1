import playGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'What is the result of the expression?';

const genGameData = () => {
  const firstNumber = getNumber(1, 100);
  const secondNumber = getNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operatorForRound = operators[getNumber(0, 2)];
  const task = `${firstNumber} ${operatorForRound} ${secondNumber}`;
  let answer;

  switch (operatorForRound) {
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
