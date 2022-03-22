import PropTypes from 'prop-types';

const gameArrays = (size) => {
  const victoryArr = [];
  let playerArr = [];

  const puzzleSize = size * size;

  for (let i = 1; i <= puzzleSize; i += 1) {
    victoryArr.push(i);
  }

  victoryArr.splice(0, 0, '');
  victoryArr.splice(victoryArr.length - 1, 1, '');

  playerArr = [...victoryArr];

  return { victoryArr, playerArr };
};

gameArrays.propTypes = {
  size: PropTypes.number.isRequired,
};

export default gameArrays;
