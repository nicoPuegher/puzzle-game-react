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
  currentVictory: (currentVictoryArr) => {},
  currentPlayer: (currentPlayerArr) => {},
});

export default GameContext;
