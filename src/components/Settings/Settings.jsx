import styles from './Settings.module.css';
import Options from './Options/Options';

const Settings = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.form__container}>
        <h3>Game Mode</h3>
        <Options content={['Image', 'Numbers']} />
      </div>

      <div className={styles.form__container}>
        <h3>Puzzle Size</h3>
        <Options content={['3x3', '4x4', '5x5']} />
      </div>

      <button type="submit" disabled className={styles.form__submit}>
        Start
      </button>
    </form>
  );
};

export default Settings;
