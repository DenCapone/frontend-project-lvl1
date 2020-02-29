import readlineSync from 'readline-sync';

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

export default startProgressionGame;
