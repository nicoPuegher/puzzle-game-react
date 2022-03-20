import GameProvider from './store/GameProvider';
import Game from './components/Game';

const App = () => (
  <GameProvider>
    <Game />
  </GameProvider>
);

export default App;
