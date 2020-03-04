import readlineSync from 'readline-sync';
import { getNumber } from './gameFlow.js';

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!'); //  greeting()
  const userName = readlineSync.question('May I have your name? '); //  greeting()
  console.log(`Hello ${userName}!`); //  greeting()
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); //   rules
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < 3; score += 1) {
    const firstNumber = getNumber();
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

export default startEvenGame;
