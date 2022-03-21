import PropTypes from 'prop-types';
import TableData from '../TableData/TableData';

const TableRow = ({ id, size }) => {
  const tableData = [];

  for (let column = 0; column < size; column += 1) {
    tableData.push(
      <TableData key={`td${id[column]}`} id={id[column]} size={size} />
    );
  }

  return <tr>{tableData}</tr>;
};

TableRow.propTypes = {
  id: PropTypes.instanceOf(Array).isRequired,
  size: PropTypes.number.isRequired,
};

export default TableRow;
