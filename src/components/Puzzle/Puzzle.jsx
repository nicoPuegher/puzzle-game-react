import PropTypes from 'prop-types';
import styles from './Puzzle.module.css';
import TableRow from './TableRow/TableRow';

const Puzzle = ({ playerSettings }) => {
  const size = +playerSettings.size.slice(0, 1);
  const movesLimit = 200;

  return (
    <section className={styles.puzzle}>
      <header>
        <h1>JavaScript Puzzle</h1>
        <p>Movements left</p>
        <span>{movesLimit}</span>
      </header>
      <main>
        <table>
          <tbody>
            <TableRow size={size} />
          </tbody>
        </table>
      </main>
    </section>
  );
};

Puzzle.propTypes = {
  playerSettings: PropTypes.instanceOf(Object).isRequired,
};

export default Puzzle;
