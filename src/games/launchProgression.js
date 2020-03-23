import playtGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getProgression = () => {
  const progressionStep = getNumber(1, 100);
  const begginingOfProgression = getNumber(1, 100);
  const progressionLength = 10;
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = begginingOfProgression + progressionStep * i;
  }
  return progression;
};

const genGame = () => {
  const progression = getProgression();
  const hiddenNumber = Math.floor(Math.random() * 10);
  const answer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const task = progression.join(' ');

  return [task, answer];
};

const startProgressionGame = () => {
  playtGame(description, genGame);
};

export default startProgressionGame;
