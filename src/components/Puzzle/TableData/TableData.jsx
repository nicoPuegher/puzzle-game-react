import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import checkScreen from '../../../helpers/checkScreen';

const TableData = ({ id, size }) => {
  const responsive = checkScreen(size);

  return <td id={id} className={`${styles.td} ${styles[responsive]}`} />;
};

TableData.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default TableData;
