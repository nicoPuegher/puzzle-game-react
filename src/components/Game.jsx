import { useState, useContext, useEffect } from 'react';
import GameContext from '../store/gameContext';
import Play from './Play/Play';
import Settings from './Settings/Settings';
import Puzzle from './Puzzle/Puzzle';

const Game = () => {
  const gameCtx = useContext(GameContext);
  const [gameScreen, setGameScreen] = useState('play');
  const [playerSettings, setPlayerSettings] = useState({ mode: '', size: '' });

  useEffect(() => {
    if (gameCtx.win) {
      gameCtx.playerStage({
        title: 'You won!',
        subtitle: 'Want to play again?',
        text: 'Please, select your game preferences',
        btnText: 'Play Again',
      });
      setGameScreen('play');
    }
  }, [gameCtx.win]);

  const changeScreenHandler = (screen) => {
    setGameScreen(screen);
  };

  const submitHandler = (settings) => {
    setPlayerSettings(settings);
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
      {gameScreen === 'settings' && (
        <Settings
          onSubmit={submitHandler}
          onChangeScreen={changeScreenHandler}
        />
      )}
      {gameScreen === 'puzzle' && <Puzzle playerSettings={playerSettings} />}
    </>
  );
};

export default Game;
