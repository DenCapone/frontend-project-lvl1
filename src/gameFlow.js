import readlineSync from 'readline-sync';

const playGame = (rule, genGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(rule);
  const numOfRounds = 3;

  for (let score = 0; score < numOfRounds; score += 1) { // For win you must get 3 score in a row !
    const gameData = genGameData();
    const [task, answer] = gameData;

    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
