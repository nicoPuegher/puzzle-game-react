import { useState } from 'react';
import styles from './Settings.module.css';
import Options from './Options/Options';

const Settings = () => {
  const [isDisabled, setIsDisabled] = useState({ mode: true, size: true });

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const validate = (id) => {
    if (id === '1') {
      setIsDisabled((prevState) => ({ ...prevState, mode: false }));
    }

    if (id === '2') {
      setIsDisabled((prevState) => ({ ...prevState, size: false }));
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

export default Settings;
