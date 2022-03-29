/* eslint-disable no-unused-vars */
import React from 'react';

const GameContext = React.createContext({
  currentStage: {
    title: '',
    subtitle: '',
    text: '',
    btnText: '',
  },
  victoryArr: [],
  playerArr: [],
  playerStage: (stage) => {},
  gameArrays: (currentVictoryArr, currentPlayerArr) => {},
  // currentVictory: (currentVictoryArr) => {},
  // currentPlayer: (currentPlayerArr) => {},
  blocksMove: (id) => {},
});

export default GameContext;
