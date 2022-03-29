/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState, useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import checkScreen from '../../../helpers/checkScreen';
import GameContext from '../../../store/gameContext';
import gameArrays from '../../../helpers/gameArrays';

import img from '../../../image/dog.jpg';
import createImgSlices from '../../../helpers/createImgSlices';

// eslint-disable-next-line no-unused-vars
const TableData = ({ id, size }) => {
  const responsive = checkScreen(size);
  const [images, setImages] = useState([]);
  const imgRef = useRef(null);
  const gameCtx = useContext(GameContext);

  useEffect(() => {
    createImgSlices(img, size).then((res) => setImages(res));
  }, []);

  useEffect(() => {
    const { victoryArr, playerArr } = gameArrays(images);
    gameCtx.gameArrays(victoryArr, playerArr);
  }, [images]);

  console.log(gameCtx);

  // useEffect(() => {
  //   const image = imgRef.current;
  //   image.setAttribute('src', images[id]);
  // }, [images]);

  return (
    <td className={`${styles.td} ${styles[responsive]}`}>
      <img ref={imgRef} alt="" />
    </td>
  );
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
