import { blankPosition } from './updateBlankPosition';

const blocksMovement = (id, size, isRowValid) => {
  let move = blankPosition - id;

  if (move < 0) {
    move = -move;
  }

  if (move === 1) {
    if (!isRowValid) return false;
    return true;
  }

  if (move === size) {
    return true;
  }

  return false;
};

export default blocksMovement;
