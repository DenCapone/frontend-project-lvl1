import readlineSync from 'readline-sync';

const getNumber = () => Math.ceil(Math.random() * 100);

const startGame = (rule, gameModule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(rule);
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < 3; score += 1) { // game rounds
    const getRound = gameModule();
    const task = getRound[0];
    const answer = getRound[1];

    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  return score === 3 ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

export { startGame, getNumber };
