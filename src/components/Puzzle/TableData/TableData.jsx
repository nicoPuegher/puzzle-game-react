import PropTypes from 'prop-types';
import styles from './TableData.module.css';
import checkScreen from '../../../helpers/checkScreen';

const TableData = ({ size }) => {
  const responsive = checkScreen(size);

  return <td className={`${styles.td} ${styles[responsive]}`} />;
};

TableData.propTypes = {
  size: PropTypes.number.isRequired,
};

export default TableData;
