import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Puzzle.module.css';
import GameContext from '../../store/gameContext';
import puzzleId from '../../helpers/puzzleId';
import TableRow from './TableRow/TableRow';

const Puzzle = ({ playerSettings }) => {
  const gameCtx = useContext(GameContext);

  const size = +playerSettings.size.slice(0, 1);
  const tableRow = [];

  useEffect(() => {
    gameCtx.maxMoves(200);
  }, []);

  for (let row = 0; row < size; row += 1) {
    const idArr = puzzleId(size, row);
    tableRow.push(
      <TableRow
        key={`tr${row + 1}`}
        id={`tr${row + 1}`}
        idArr={idArr}
        mode={playerSettings.mode}
        size={size}
      />
    );
  }

  return (
    <section className={styles.puzzle}>
      <header>
        <h1>JavaScript Puzzle</h1>
        <p>Movements left</p>
        <span>{gameCtx.playerMoves}</span>
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
