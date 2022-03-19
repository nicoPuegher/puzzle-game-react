import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import GameContext from './gameContext';

const defaultState = {
  currentStage: 'welcome',
};

const gameReducer = (state, action) => {
  if (action.type === 'STAGE') {
    return {
      currentStage: action.playerStage,
    };
  }

  return defaultState;
};

const GameProvider = ({ children }) => {
  const [gameState, dispatchGameAction] = useReducer(gameReducer, defaultState);

  const playerStageHandler = (playerStage) => {
    dispatchGameAction({
      type: 'STAGE',
      playerStage,
    });
  };

  const gameContext = useMemo(
    () => ({
      currentStage: gameState.currentStage,
      playerStage: playerStageHandler,
    }),
    [gameState.currentStage]
  );

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameProvider;
