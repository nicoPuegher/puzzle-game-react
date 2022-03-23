import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import checkScreen from '../../../helpers/checkScreen';
import gameArrays from '../../../helpers/gameArrays';
import GameContext from '../../../store/gameContext';

const TableData = ({ id, size }) => {
  const gameCtx = useContext(GameContext);
  const responsive = checkScreen(size);

  useEffect(() => {
    const { victory } = gameArrays(size);
    const { playerArr } = gameArrays(size);

    gameCtx.currentVictory(victory);
    gameCtx.currentPlayer(playerArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <td id={id} className={`${styles.td} ${styles[responsive]}`}>
      {gameCtx.playerArr[id]}
    </td>
  );
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
