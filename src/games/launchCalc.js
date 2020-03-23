import playtGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'What is the result of the expression?';

const genExpression = () => {
  const firstNumber = getNumber(1, 100);
  const secondNumber = getNumber(1, 100);
  const operatorsForGame = ['+', '-', '*'];
  const operatorForRound = operatorsForGame[Math.floor(Math.random() * operatorsForGame.length)];
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
  playtGame(description, genExpression);
};

export default startCalculateGame;
