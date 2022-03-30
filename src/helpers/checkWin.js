const checkWin = (victoryArr, playerArr) => {
  const win = JSON.stringify(victoryArr) === JSON.stringify(playerArr);

  if (win) {
    return true;
  }

  return false;
};

export default checkWin;
