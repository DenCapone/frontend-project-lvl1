import playGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getProgression = () => {
  const progressionStep = getNumber(1, 100);
  const startNumber = getNumber(1, 100);
  const progressionLength = 10;
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = startNumber + progressionStep * i;
  }
  return progression;
};

const genGameData = () => {
  const progression = getProgression();
  const hiddenElementPosition = getNumber(0, 9);
  const answer = String(progression[hiddenElementPosition]);
  progression[hiddenElementPosition] = '..';
  const task = progression.join(' ');

  return [task, answer];
};

const startProgressionGame = () => {
  playGame(description, genGameData);
};

export default startProgressionGame;
