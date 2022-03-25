/* eslint-disable import/no-mutable-exports */
let blankPosition;
let rowBlankPosition;

const updateBlankPosition = (id) => {
  blankPosition = id;
};

const updateRowBlankPosition = (block) => {
  rowBlankPosition = block.parentElement;
};

const checkRowBlankPosition = (block) => {
  if (rowBlankPosition.contains(block)) {
    return true;
  }

  return false;
};

export default updateBlankPosition;
export { blankPosition, updateRowBlankPosition, checkRowBlankPosition };
