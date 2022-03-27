import updateBlankPosition from './updateBlankPosition';

const gameArrays = (mode, imagePieces, size) => {
  const victoryArr = [];
  let playerArr = [];

  const puzzleSize = size * size;

  if (mode === 'Image') {
    for (let i = 1; i <= puzzleSize; i += 1) {
      victoryArr.push(imagePieces[i]);
    }
  }

  if (mode === 'Numbers') {
    for (let i = 1; i <= puzzleSize; i += 1) {
      victoryArr.push(i);
    }
  }

  victoryArr.splice(0, 0, 'empty');
  victoryArr.splice(victoryArr.length - 1, 1, '');
  updateBlankPosition(victoryArr.indexOf(''));

  playerArr = [...victoryArr];

  return { victoryArr, playerArr };
};

export default gameArrays;
