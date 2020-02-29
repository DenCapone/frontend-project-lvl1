import readlineSync from 'readline-sync';

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
    const firstNumber = Math.ceil(Math.random() * 100);
    const secondNumber = Math.ceil(Math.random() * 100);
    const answer = getGcd(firstNumber, secondNumber);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  return score === 3 ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

export default startGcdGame;
