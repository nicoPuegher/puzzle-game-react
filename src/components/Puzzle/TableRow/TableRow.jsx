import PropTypes from 'prop-types';
import TableData from '../TableData/TableData';

const TableRow = ({ id, mode, idArr, size }) => {
  const tableData = [];

  for (let column = 0; column < size; column += 1) {
    tableData.push(
      <TableData
        key={`td${idArr[column]}`}
        id={idArr[column]}
        mode={mode}
        size={size}
      />
    );
  }

  return <tr id={id}>{tableData}</tr>;
};

TableRow.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  idArr: PropTypes.instanceOf(Array).isRequired,
  size: PropTypes.number.isRequired,
};

export default TableRow;
