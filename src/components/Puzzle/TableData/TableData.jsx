/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import GameContext from '../../../store/gameContext';
import checkScreen from '../../../helpers/checkScreen';
import createImgSlices from '../../../helpers/createImgSlices';
import img from '../../../image/dog.jpg';
import gameArrays from '../../../helpers/gameArrays';

const TableData = ({ id, size }) => {
  const [images, setImages] = useState([]);
  const gameCtx = useContext(GameContext);
  const responsive = checkScreen(size);

  useEffect(() => {
    createImgSlices(img, size).then((res) => setImages(res));
  }, []);

  useEffect(() => {
    const { victoryArr, playerArr } = gameArrays(images);
    gameCtx.gameArrays(victoryArr, playerArr);
  }, [images]);

  const clickHandler = () => {
    gameCtx.blocksMove(id);
  };

  return (
    <td className={`${styles.td} ${styles[responsive]}`} onClick={clickHandler}>
      <img src={gameCtx.playerArr[id]} alt="" />
    </td>
  );
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
