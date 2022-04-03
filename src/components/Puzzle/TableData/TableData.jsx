/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import GameContext from '../../../store/gameContext';
import checkScreen from '../../../helpers/checkScreen';
import {
  updateRowBlankPosition,
  checkRowBlankPosition,
} from '../../../helpers/updateBlankPosition';
import blocksMovement from '../../../helpers/blocksMovement';

const TableData = ({ id, mode, size }) => {
  const gameCtx = useContext(GameContext);
  const tdRef = useRef(null);

  const responsive = checkScreen(size);
  const puzzleSize = size * size;
  let content;

  useEffect(() => {
    if (id === puzzleSize - 1) {
      updateRowBlankPosition(tdRef.current);
    }
  }, []);

  const clickHandler = (event) => {
    const isRowValid = checkRowBlankPosition(event.target.parentElement);
    const isValid = blocksMovement(id, size, isRowValid);

    if (isValid) {
      gameCtx.blocksMove(id);
      updateRowBlankPosition(event.target.parentElement);
    }
  };

  if (mode === 'Image') {
    content = <img src={gameCtx.playerArr[id]} alt="" />;
  }
  if (mode === 'Numbers') {
    content = `${gameCtx.playerArr[id]}`;
  }

  return (
    <td
      className={`${styles.td} ${styles[responsive]}`}
      onClick={clickHandler}
      ref={tdRef}
    >
      {gameCtx.playerArr.length > 0 ? content : ''}
    </td>
  );
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
