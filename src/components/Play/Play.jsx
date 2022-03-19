import PropTypes from 'prop-types';

const Play = ({ title, subtitle, text, btnText, onChangeScreen }) => {
  const clickHandler = () => {
    onChangeScreen('settings');
  };

  return (
    <section>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{text}</p>
      <button type="button" onClick={clickHandler}>
        {btnText}
      </button>
    </section>
  );
};

Play.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onChangeScreen: PropTypes.func.isRequired,
};
export default Play;
