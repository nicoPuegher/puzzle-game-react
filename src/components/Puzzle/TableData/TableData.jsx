/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import checkScreen from '../../../helpers/checkScreen';
import GameContext from '../../../store/gameContext';
import blocksMovement from '../../../helpers/blocksMovement';

const TableData = ({ id, size }) => {
  const gameCtx = useContext(GameContext);
  const responsive = checkScreen(size);

  const clickHandler = () => {
    const isValid = blocksMovement(id, size);
    if (isValid) {
      gameCtx.blocksMove(id);
    }
  };

  return (
    <td className={`${styles.td} ${styles[responsive]}`} onClick={clickHandler}>
      {gameCtx.playerArr[id]}
    </td>
  );
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
