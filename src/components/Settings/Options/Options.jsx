import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Options = ({ id, content, onValidate }) => {
  const checks = content.map((checkbox) => ({
    name: checkbox,
    active: false,
  }));

  const [inputsCheck, setInputsCheck] = useState(checks);

  const checkedHandler = (input) => {
    const inputIndex = checks.findIndex((item) => item.name === input.name);
    const selectedInput = checks[inputIndex];

    const updatedInput = {
      ...selectedInput,
      active: true,
    };

    const updatedChecks = [...checks];
    updatedChecks[inputIndex] = updatedInput;
    setInputsCheck(updatedChecks);

    onValidate(id, input.name);
  };

  const buttons = content.map((buttonName) => (
    <Button
      key={buttonName}
      btnText={buttonName}
      inputsCheck={inputsCheck}
      onClick={checkedHandler}
    />
  ));

  return <div>{buttons}</div>;
};

Options.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  onValidate: PropTypes.func.isRequired,
};
export default Options;
