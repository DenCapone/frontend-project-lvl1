/* eslint-disable max-len */
/* eslint-disable no-eval */
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  return console.log(`Hello ${userName}!`);
};

const startGame = () => {
  console.log('Welcome to the Brain Games!'); //  greeting()
  const userName = readlineSync.question('May I have your name? '); //  greeting()
  console.log(`Hello ${userName}!`); //  greeting()
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); //   rules
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < 3; score += 1) {
    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);

    if (randomNumber % 2 === 0) {
      const answerForEvenNumber = readlineSync.question('Your answer: ');
      if (answerForEvenNumber !== 'yes') {
        console.log(`"${answerForEvenNumber}" is wrong answer ;(. Correct answer was "yes".`);
        break;
      } else {
        console.log('Correct!');
      }
    }
    if (randomNumber % 2 !== 0) {
      const answerForNotEvenNumber = readlineSync.question('Your answer: ');
      if (answerForNotEvenNumber !== 'no') {
        console.log(`"${answerForNotEvenNumber}" is wrong answer ;(. Correct answer was "no".`);
        break;
      } else {
        console.log('Correct!');
      }
    }
  }
  return score === 3 ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

const startCalculateGame = () => {
  console.log('Welcome to the Brain Games!'); //  greeting()
  const userName = readlineSync.question('May I have your name? '); //  greeting()
  console.log(`Hello ${userName}!`); //  greeting()
  console.log('What is the result of the expression?'); //  Task
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < 3; score += 1) {
    const getRandomNumber = () => Math.ceil(Math.random() * 100);
    const operatorsUsedInTheGame = ['+', '-', '*'];
    const getRandomOperator = operatorsUsedInTheGame[Math.floor(Math.random() * operatorsUsedInTheGame.length)];
    const expression = `${getRandomNumber()} ${getRandomOperator} ${getRandomNumber()}`;
    const result = eval(expression);
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer != result) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  return score === 3 ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

export { greeting, startGame, startCalculateGame };
