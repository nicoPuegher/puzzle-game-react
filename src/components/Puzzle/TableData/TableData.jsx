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

const TableData = ({ id, size }) => {
  const [images, setImages] = useState([]);
  const gameCtx = useContext(GameContext);
  const tdRef = useRef(null);

  const responsive = checkScreen(size);
  const puzzleSize = size * size;

  useEffect(() => {
    createImgSlices(img, size).then((res) => setImages(res));

    if (id === puzzleSize) {
      updateRowBlankPosition(tdRef.current);
    }
  }, []);

  useEffect(() => {
    const { victoryArr, playerArr } = gameArrays(images);
    gameCtx.gameArrays(victoryArr, playerArr);
  }, [images]);

  const clickHandler = (event) => {
    // parentElement because img is clicked, not td
    const isRowValid = checkRowBlankPosition(event.target.parentElement);
    const isValid = blocksMovement(id, size, isRowValid);

    if (isValid) {
      gameCtx.blocksMove(id);
      updateRowBlankPosition(event.target.parentElement);
    }
  };

  return (
    <td
      className={`${styles.td} ${styles[responsive]}`}
      onClick={clickHandler}
      ref={tdRef}
    >
      <img src={gameCtx.playerArr[id]} alt="" />
    </td>
  );
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
