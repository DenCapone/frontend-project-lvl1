import readlineSync from 'readline-sync';
import { getNumber } from './gameFlow.js';

const startCalculateGame = () => {
  console.log('Welcome to the Brain Games!'); //  greeting()
  const userName = readlineSync.question('May I have your name? '); //  greeting()
  console.log(`Hello ${userName}!`); //  greeting()
  console.log('What is the result of the expression?'); //  Task
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < 3; score += 1) {
    const getFirstNumber = getNumber();
    const getSecondNumber = getNumber();
    const operators = ['+', '-', '*'];
    const getOperator = operators[Math.floor(Math.random() * operators.length)];
    const expression = `${getFirstNumber} ${getOperator} ${getSecondNumber}`;

    let result;

    switch (getOperator) {
      case '+':
        result = getFirstNumber + getSecondNumber;
        break;
      case '-':
        result = getFirstNumber - getSecondNumber;
        break;
      case '*':
        result = getFirstNumber * getSecondNumber;
        break;
      default:
        break;
    }

    console.log(`Question: ${expression}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer !== result) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  return score === 3 ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

export default startCalculateGame;
