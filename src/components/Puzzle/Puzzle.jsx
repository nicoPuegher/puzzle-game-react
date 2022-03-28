import PropTypes from 'prop-types';
import styles from './Puzzle.module.css';
import puzzleId from '../../helpers/puzzleId';
import TableRow from './TableRow/TableRow';

const Puzzle = ({ playerSettings }) => {
  const size = +playerSettings.size.slice(0, 1);
  const movesLimit = 200;
  const tableRow = [];

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
