/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import checkScreen from '../../../helpers/checkScreen';

import img from '../../../image/dog.jpg';
import createImgSlices from '../../../helpers/createImgSlices';

const TableData = ({ id, size }) => {
  // this responsive causes strange movement when loading img
  const responsive = checkScreen(size);
  const [images, setImages] = useState([]);
  const imgRef = useRef(null);

  useEffect(() => {
    createImgSlices(img).then((res) => setImages(res));
  }, []);

  useEffect(() => {
    const image = imgRef.current;
    image.setAttribute('src', images[id]);
  }, [images]);

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
