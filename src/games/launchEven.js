import playtGame from '../gameFlow.js';
import getNumber from '../utils.js';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const genNum = () => {
  const num = getNumber(1, 100);
  const answer = num % 2 === 0 ? 'yes' : 'no';

  return [num, answer];
};

const startEvenGame = () => {
  playtGame(description, genNum);
};

export default startEvenGame;
