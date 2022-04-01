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
  playerMoves: 0,
  win: false,
  lose: false,
  playerStage: (stage) => {},
  maxMoves: (maxMoves) => {},
  gameArrays: (currentVictoryArr, currentPlayerArr) => {},
  blocksMove: (id) => {},
  defaultState: () => {},
});

export default GameContext;
