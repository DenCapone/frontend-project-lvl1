import playGame from '../gameFlow.js';
import getNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const genGameData = () => {
  const task = getNumber(1, 100);
  const answer = task % 2 === 0 ? 'yes' : 'no';

  return [task, answer];
};

const startEvenGame = () => {
  playGame(description, genGameData);
};

export default startEvenGame;
