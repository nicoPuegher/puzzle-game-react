import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import GameContext from './gameContext';

const defaultState = {
  currentStage: {
    title: 'Welcome!',
    subtitle: 'Ready to play?',
    text: 'Please, select your game preferences',
    btnText: 'Select',
  },
  victoryArr: [],
  playerArr: [],
};

const gameReducer = (state, action) => {
  if (action.type === 'STAGE') {
    return {
      ...state,
      currentStage: action.playerStage,
    };
  }

  if (action.type === 'WINARR') {
    return {
      ...state,
      victoryArr: action.currentVictoryArr,
    };
  }

  if (action.type === 'PLAYERARR') {
    return {
      ...state,
      playerArr: action.currentPlayerArr,
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

  const currentVictoryHandler = (currentVictoryArr) => {
    dispatchGameAction({
      type: 'WINARR',
      currentVictoryArr,
    });
  };

  const currentPlayerHandler = (currentPlayerArr) => {
    dispatchGameAction({
      type: 'PLAYERARR',
      currentPlayerArr,
    });
  };

  const gameContext = useMemo(
    () => ({
      currentStage: gameState.currentStage,
      victoryArr: gameState.victoryArr,
      playerArr: gameState.playerArr,
      playerStage: playerStageHandler,
      currentVictory: currentVictoryHandler,
      currentPlayer: currentPlayerHandler,
    }),
    [gameState]
  );

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameProvider;
