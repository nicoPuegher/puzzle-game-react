import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Settings.module.css';
import Options from './Options/Options';

const Settings = ({ onSubmit, onChangeScreen }) => {
  const [isDisabled, setIsDisabled] = useState({ mode: true, size: true });
  const [playerSettings, setPlayerSettings] = useState({ mode: '', size: '' });

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(playerSettings);
    onChangeScreen('puzzle');
  };

  const validate = (id, settings) => {
    if (id === '1') {
      setIsDisabled((prevState) => ({ ...prevState, mode: false }));
      setPlayerSettings((prevState) => ({ ...prevState, mode: settings }));
    }

    if (id === '2') {
      setIsDisabled((prevState) => ({ ...prevState, size: false }));
      setPlayerSettings((prevState) => ({ ...prevState, size: settings }));
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.form__container}>
        <h3>Game Mode</h3>
        <Options id="1" content={['Image', 'Numbers']} onValidate={validate} />
      </div>

      <div className={styles.form__container}>
        <h3>Puzzle Size</h3>
        <Options id="2" content={['3x3', '4x4', '5x5']} onValidate={validate} />
      </div>

      <button
        type="submit"
        disabled={!(isDisabled.mode === false && isDisabled.size === false)}
        className={styles.form__submit}
      >
        Start
      </button>
    </form>
  );
};

Settings.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeScreen: PropTypes.func.isRequired,
};

export default Settings;
