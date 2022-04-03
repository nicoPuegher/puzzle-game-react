const puzzleId = (size, row) => {
  let arr = [];

  if (size === 3) {
    switch (row) {
      case 0:
        arr = [0, 1, 2];
        break;
      case 1:
        arr = [3, 4, 5];
        break;
      case 2:
        arr = [6, 7, 8];
        break;
      default:
        break;
    }
  }

  if (size === 4) {
    switch (row) {
      case 0:
        arr = [0, 1, 2, 3];
        break;
      case 1:
        arr = [4, 5, 6, 7];
        break;
      case 2:
        arr = [8, 9, 10, 11];
        break;
      case 3:
        arr = [12, 13, 14, 15];
        break;
      default:
        break;
    }
  }

  if (size === 5) {
    switch (row) {
      case 0:
        arr = [0, 1, 2, 3, 4];
        break;
      case 1:
        arr = [5, 6, 7, 8, 9];
        break;
      case 2:
        arr = [10, 11, 12, 13, 14];
        break;
      case 3:
        arr = [15, 16, 17, 18, 19];
        break;
      case 4:
        arr = [20, 21, 22, 23, 24];
        break;
      default:
        break;
    }
  }

  return arr;
};

export default puzzleId;
