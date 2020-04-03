import playGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getProgression = (elements) => {
  const progressionStep = getNumber(1, 100);
  const startNumber = getNumber(1, 100);
  const progression = [];

  for (let i = 0; i < elements; i += 1) {
    progression[i] = startNumber + progressionStep * i;
  }
  return progression;
};

const genGameData = () => {
  const progression = getProgression(10);
  const hiddenElementPosition = getNumber(0, progression.length - 1);
  const answer = String(progression[hiddenElementPosition]);
  progression[hiddenElementPosition] = '..';
  const task = progression.join(' ');

  return [task, answer];
};

const startProgressionGame = () => {
  playGame(description, genGameData);
};

export default startProgressionGame;
