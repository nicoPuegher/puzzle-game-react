/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState, useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import GameContext from '../../../store/gameContext';
import checkScreen from '../../../helpers/checkScreen';
import createImgSlices from '../../../helpers/createImgSlices';
import img from '../../../image/dog.jpg';
import {
  updateRowBlankPosition,
  checkRowBlankPosition,
} from '../../../helpers/updateBlankPosition';
import gameArrays from '../../../helpers/gameArrays';
import blocksMovement from '../../../helpers/blocksMovement';

const TableData = ({ id, mode, size }) => {
  const [images, setImages] = useState([]);
  const gameCtx = useContext(GameContext);
  const tdRef = useRef(null);

  const responsive = checkScreen(size);
  const puzzleSize = size * size;
  let gameContent;

  useEffect(() => {
    if (mode === 'Image') {
      createImgSlices(img, size).then((res) => setImages(res));
    }

    if (id === puzzleSize) {
      updateRowBlankPosition(tdRef.current);
    }
  }, []);

  useEffect(() => {
    console.log('runs');
    const { victoryArr, playerArr } = gameArrays(mode, puzzleSize, images);
    gameCtx.gameArrays(victoryArr, playerArr);
  }, [images]);

  if (mode === 'Image') {
    gameContent = <img src={gameCtx.playerArr[id]} alt="" />;
  }

  if (mode === 'Numbers') {
    gameContent = `${gameCtx.playerArr[id]}`;
  }

  const clickHandler = (event) => {
    let isRowValid;

    if (mode === 'Image') {
      isRowValid = checkRowBlankPosition(event.target.parentElement);
    }

    if (mode === 'Numbers') {
      isRowValid = checkRowBlankPosition(event.target);
    }

    const isValid = blocksMovement(id, size, isRowValid);

    if (isValid) {
      gameCtx.blocksMove(id);
      if (mode === 'Image') {
        updateRowBlankPosition(event.target.parentElement);
      }

      if (mode === 'Numbers') {
        updateRowBlankPosition(event.target);
      }
    }
  };

  return (
    <td
      className={`${styles.td} ${styles[responsive]}`}
      onClick={clickHandler}
      ref={tdRef}
    >
      {gameContent}
    </td>
  );
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
