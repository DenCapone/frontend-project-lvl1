/* eslint-disable eqeqeq */
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

const startGcdGame = () => {
  console.log('Welcome to the Brain Games!'); //  greeting()
  const userName = readlineSync.question('May I have your name? '); //  greeting()
  console.log(`Hello ${userName}!`); //  greeting()
  console.log('Find the greatest common divisor of given numbers.'); //   rules
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < 3; score += 1) {
    const getRandomNumber = () => Math.ceil(Math.random() * 100);
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const answer = getGcd(firstNumber, secondNumber);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer != answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  return score === 3 ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

const getProgression = () => {
  const progressionStep = Math.floor(Math.random() * 100);
  const begginingOfProgression = Math.floor(Math.random() * 100);
  const progression = [];
  progression[0] = begginingOfProgression;

  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  return progression;
};

const startProgressionGame = () => {
  console.log('Welcome to the Brain Games!'); //  greeting()
  const userName = readlineSync.question('May I have your name? '); //  greeting()
  console.log(`Hello ${userName}!`); //  greeting()
  console.log('Find the greatest common divisor of given numbers.'); //   rules
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < 3; score += 1) {
    const progression = getProgression();
    const hiddenNumber = Math.floor(Math.random() * 10);
    const answer = (progression[hiddenNumber]);
    progression[hiddenNumber] = '..';
    const task = progression.join(' ');
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer != answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  return score === 3 ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

const isPrimeNumber = (number) => {
  if (number <= 2) {
    return 'yes';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const startPrimeGame = () => {
  console.log('Welcome to the Brain Games!'); //  greeting()
  const userName = readlineSync.question('May I have your name? '); //  greeting()
  console.log(`Hello ${userName}!`); //  greeting()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); //   rules
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < 3; score += 1) {
    const getNumber = Math.ceil(Math.random() * 100);
    console.log(`Question: ${getNumber}`);
    const answer = isPrimeNumber(getNumber);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer != answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  return score === 3 ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

export {
  greeting, startGame, startCalculateGame, startGcdGame, startProgressionGame, startPrimeGame,
};
