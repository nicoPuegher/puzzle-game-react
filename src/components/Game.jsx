import { useState, useContext } from 'react';
import GameContext from '../store/gameContext';
import Play from './Play/Play';
import Settings from './Settings/Settings';
import Puzzle from './Puzzle/Puzzle';

const Game = () => {
  const [gameScreen, setGameScreen] = useState('play');
  const gameCtx = useContext(GameContext);

  const changeScreenHandler = (screen) => {
    setGameScreen(screen);
  };

  return (
    <>
      {gameScreen === 'play' && (
        <Play
          title={gameCtx.currentStage.title}
          subtitle={gameCtx.currentStage.subtitle}
          text={gameCtx.currentStage.text}
          btnText={gameCtx.currentStage.btnText}
          onChangeScreen={changeScreenHandler}
        />
      )}
      {gameScreen === 'settings' && <Settings />}
      {gameScreen === 'puzzle' && <Puzzle />}
    </>
  );
};

export default Game;
