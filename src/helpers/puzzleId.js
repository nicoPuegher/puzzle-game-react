const puzzleId = (size, row) => {
  let arr = [];

  if (size === 3) {
    switch (row) {
      case 0:
        arr = [1, 2, 3];
        break;
      case 1:
        arr = [4, 5, 6];
        break;
      case 2:
        arr = [7, 8, 9];
        break;
      default:
        break;
    }
  }

  if (size === 4) {
    switch (row) {
      case 0:
        arr = [1, 2, 3, 4];
        break;
      case 1:
        arr = [5, 6, 7, 8];
        break;
      case 2:
        arr = [9, 10, 11, 12];
        break;
      case 3:
        arr = [13, 14, 15, 16];
        break;
      default:
        break;
    }
  }

  if (size === 5) {
    switch (row) {
      case 0:
        arr = [1, 2, 3, 4, 5];
        break;
      case 1:
        arr = [6, 7, 8, 9, 10];
        break;
      case 2:
        arr = [11, 12, 13, 14, 15];
        break;
      case 3:
        arr = [16, 17, 18, 19, 20];
        break;
      case 4:
        arr = [21, 22, 23, 24, 25];
        break;
      default:
        break;
    }
  }

  return arr;
};

export default puzzleId;
