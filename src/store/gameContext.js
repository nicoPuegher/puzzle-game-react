import React from 'react';

const GameContext = React.createContext({
  currentStage: '',
  playerStage: () => {},
});

export default GameContext;
