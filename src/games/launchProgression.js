import { getNumber, startGame } from './gameFlow.js';

const objective = 'Find the greatest common divisor of given numbers.';

const getProgression = () => {
  const progressionStep = getNumber();
  const begginingOfProgression = getNumber();
  const progression = [];
  progression[0] = begginingOfProgression;

  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  return progression;
};

const progressionGame = () => {
  const progression = getProgression();
  const hiddenNumber = Math.floor(Math.random() * 10);
  const answer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const task = progression.join(' ');

  return [task, answer];
};

const startProgressionGame = () => {
  startGame(objective, progressionGame);
};

export default startProgressionGame;
