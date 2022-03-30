import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import GameContext from './gameContext';
import updateBlankPosition from '../helpers/updateBlankPosition';

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

  if (action.type === 'MAX') {
    return {
      ...state,
      playerMoves: action.maxMoves,
    };
  }

  if (action.type === 'ARR') {
    return {
      ...state,
      victoryArr: action.currentVictoryArr,
      playerArr: action.currentPlayerArr,
    };
  }

  if (action.type === 'MOVEMENT') {
    const clickedBlock = action.id;
    const blankBlock = state.playerArr.indexOf('');

    const newArr = [...state.playerArr];
    newArr[blankBlock] = newArr[clickedBlock];
    newArr[clickedBlock] = '';

    const updatedBlank = newArr.indexOf('');
    updateBlankPosition(updatedBlank);

    const currentMoves = state.playerMoves - 1;

    // const clickedBlock = action.id;
    // const blankBlock = state.playerArr.indexOf('');

    // const newArr = [...state.playerArr];
    // console.log(newArr[blankBlock]);
    // console.log(newArr[clickedBlock]);
    // newArr[blankBlock] = newArr[clickedBlock];
    // newArr[clickedBlock] = '';

    // const updatedBlank = newArr.indexOf('');
    // updateBlankPosition(updatedBlank);

    return {
      ...state,
      playerArr: newArr,
      playerMoves: currentMoves,
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

  const maxMovesHandler = (maxMoves) => {
    dispatchGameAction({
      type: 'MAX',
      maxMoves,
    });
  };

  const gameArraysHandler = (currentVictoryArr, currentPlayerArr) => {
    dispatchGameAction({
      type: 'ARR',
      currentVictoryArr,
      currentPlayerArr,
    });
  };

  const blocksMoveHandler = (id) => {
    dispatchGameAction({
      type: 'MOVEMENT',
      id,
    });
  };

  const gameContext = useMemo(
    () => ({
      currentStage: gameState.currentStage,
      victoryArr: gameState.victoryArr,
      playerArr: gameState.playerArr,
      playerMoves: gameState.playerMoves,
      playerStage: playerStageHandler,
      maxMoves: maxMovesHandler,
      gameArrays: gameArraysHandler,
      blocksMove: blocksMoveHandler,
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
