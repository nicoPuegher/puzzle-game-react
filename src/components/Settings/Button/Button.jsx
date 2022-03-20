import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ btnText, inputsCheck, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const clickHandler = (event) => {
    onClick(event.target.firstChild);
  };

  useEffect(() => {
    const inputIndex = inputsCheck.findIndex((item) => item.name === btnText);
    if (inputsCheck[inputIndex].active === true) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [btnText, inputsCheck]);

  return (
    <button
      type="button"
      className={`${styles.button} ${isChecked && styles.active}`}
      onClick={clickHandler}
    >
      <input type="checkbox" name={btnText} checked={isChecked} readOnly />
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  inputsCheck: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
