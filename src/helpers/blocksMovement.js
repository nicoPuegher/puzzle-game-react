import { blankPosition } from './updateBlankPosition';

const blocksMovement = (id, size) => {
  let move = blankPosition - id;

  if (move < 0) {
    move = -move;
  }

  if (move === 1 || move === size) {
    console.log('move');
  }
};

export default blocksMovement;
