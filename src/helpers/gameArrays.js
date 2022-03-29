import updateBlankPosition from './updateBlankPosition';

const gameArrays = (images) => {
  // const puzzleSize = size * size;
  // if (mode === 'Numbers') {
  //   for (let i = 1; i <= puzzleSize; i += 1) {
  //     victoryArr.push(i);
  //   }
  // }

  let victoryArr = [];
  let playerArr = [];

  victoryArr = images;

  victoryArr.splice(0, 0, 'empty');
  victoryArr.splice(victoryArr.length - 1, 1, '');
  updateBlankPosition(victoryArr.indexOf(''));

  playerArr = [...victoryArr];

  return { victoryArr, playerArr };
};

export default gameArrays;
