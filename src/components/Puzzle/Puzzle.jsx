import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Puzzle.module.css';
import GameContext from '../../store/gameContext';
import gameArrays from '../../helpers/gameArrays';
import puzzleId from '../../helpers/puzzleId';
import TableRow from './TableRow/TableRow';

const Puzzle = ({ playerSettings }) => {
  const gameCtx = useContext(GameContext);
  const size = +playerSettings.size.slice(0, 1);
  const movesLimit = 200;
  const tableRow = [];

  useEffect(() => {
    const { victoryArr } = gameArrays(size);
    const { playerArr } = gameArrays(size);

    gameCtx.currentVictory(victoryArr);
    gameCtx.currentPlayer(playerArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  for (let row = 0; row < size; row += 1) {
    const idArr = puzzleId(size, row);
    tableRow.push(<TableRow key={`tr${row + 1}`} id={idArr} size={size} />);
  }

  return (
    <section className={styles.puzzle}>
      <header>
        <h1>JavaScript Puzzle</h1>
        <p>Movements left</p>
        <span>{movesLimit}</span>
      </header>
      <main>
        <table>
          <tbody>{tableRow}</tbody>
        </table>
      </main>
    </section>
  );
};

Puzzle.propTypes = {
  playerSettings: PropTypes.instanceOf(Object).isRequired,
};

export default Puzzle;
