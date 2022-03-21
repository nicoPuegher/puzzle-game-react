import PropTypes from 'prop-types';
import TableData from '../TableData/TableData';

const TableRow = ({ size }) => {
  const tableData = [];

  for (let column = 0; column < size; column += 1) {
    tableData.push(<TableData size={size} />);
  }

  return <tr>{tableData}</tr>;
};

TableRow.propTypes = {
  size: PropTypes.number.isRequired,
};

export default TableRow;
