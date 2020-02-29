import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  return console.log(`Hello ${userName}!`);
};
/*
const firstNumber = Math.ceil(Math.random() * 100); //  get random number
const secondNumber = Math.ceil(Math.random() * 100); // get random number

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
*/
const startGame = () => { //  game flow
  console.log('Welcome to the Brain Games!'); //  greeting()
  const userName = readlineSync.question('May I have your name? '); //  greeting()
  console.log(`Hello ${userName}!`); //  greeting()
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); //   rules
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < 3; score += 1) { // game rounds
    const firstNumber = Math.ceil(Math.random() * 100);
    console.log(`Question: ${firstNumber}`);

    if (firstNumber % 2 === 0) {
      const answerForEvenNumber = readlineSync.question('Your answer: ');
      if (answerForEvenNumber !== 'yes') {
        console.log(`"${answerForEvenNumber}" is wrong answer ;(. Correct answer was "yes".`);
        break;
      } else {
        console.log('Correct!');
      }
    }
    if (firstNumber % 2 !== 0) {
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

export { greeting, startGame };
