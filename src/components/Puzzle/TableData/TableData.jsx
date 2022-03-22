import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import checkScreen from '../../../helpers/checkScreen';
import gameArrays from '../../../helpers/gameArrays';

const TableData = ({ id, size }) => {
  const responsive = checkScreen(size);
  const { playerArr } = gameArrays(size);

  return (
    <td id={id} className={`${styles.td} ${styles[responsive]}`}>
      {playerArr[id]}
    </td>
  );
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
