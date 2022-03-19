/* eslint-disable no-unused-vars */
import React from 'react';

const GameContext = React.createContext({
  currentStage: {
    title: '',
    subtitle: '',
    text: '',
    btnText: '',
  },
  playerStage: (stage) => {},
});

export default GameContext;
