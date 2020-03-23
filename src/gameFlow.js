import readlineSync from 'readline-sync';

const playtGame = (rule, gameModule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(rule);
  const numOfRounds = 3;
  let score = 0; //   For win you must get 3 score in a row !

  for (score; score < numOfRounds; score += 1) { // game rounds
    const getRound = gameModule();
    const task = getRound[0];
    const answer = getRound[1];

    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playtGame;
