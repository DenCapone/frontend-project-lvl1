import { getNumber, startGame } from './gameFlow.js';

const objective = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const firstNumber = getNumber();
  const task = firstNumber;
  let answer;

  if (firstNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [task, answer];
};

const startEvenGame = () => {
  startGame(objective, evenGame);
};

export default startEvenGame;
