/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import checkScreen from '../../../helpers/checkScreen';
import GameContext from '../../../store/gameContext';
import blocksMovement from '../../../helpers/blocksMovement';
import {
  updateRowBlankPosition,
  checkRowBlankPosition,
} from '../../../helpers/updateBlankPosition';

const TableData = ({ id, size }) => {
  const tdRef = useRef();
  const gameCtx = useContext(GameContext);
  const responsive = checkScreen(size);
  const puzzleSize = size * size;

  useEffect(() => {
    if (id === puzzleSize) {
      updateRowBlankPosition(tdRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = (event) => {
    const isRowValid = checkRowBlankPosition(event.target);
    const isValid = blocksMovement(id, size, isRowValid);

    if (isValid) {
      gameCtx.blocksMove(id);
      updateRowBlankPosition(event.target);
    }
  };

  return (
    <td
      className={`${styles.td} ${styles[responsive]}`}
      id={id}
      onClick={clickHandler}
      ref={tdRef}
    >
      {gameCtx.playerArr[id]}
    </td>
  );
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
