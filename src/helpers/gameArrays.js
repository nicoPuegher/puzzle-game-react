import updateBlankPosition from './updateBlankPosition';

const gameArrays = (mode, puzzleSize, images) => {
  let victoryArr = [];
  let playerArr = [];

  if (mode === 'Image') {
    victoryArr = images;
  }

  if (mode === 'Numbers') {
    for (let i = 1; i <= puzzleSize; i += 1) {
      victoryArr.push(i);
    }
  }

  victoryArr.splice(victoryArr.length - 1, 1, '');
  playerArr = [...victoryArr];

  for (let i = playerArr.length - 1; i > 0; i -= 1) {
    const random = Math.floor(Math.random() * (i + 1));
    [playerArr[i], playerArr[random]] = [playerArr[random], playerArr[i]];
  }

  updateBlankPosition(playerArr.indexOf(''));

  return { victoryArr, playerArr };
};

export default gameArrays;
