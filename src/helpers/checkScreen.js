const checkScreen = (size) => {
  const windowScreen = window.screen.width;
  let responsive = '';

  switch (size) {
    case 3:
      if (window.screen <= 320) {
        responsive = 'small3';
      }
      if (windowScreen <= 414) {
        responsive = 'medium3';
      }
      responsive = 'big3';
      break;

    case 4:
      if (window.screen <= 320) {
        responsive = 'small4';
      }
      if (windowScreen <= 414) {
        responsive = 'medium4';
      }
      responsive = 'big4';
      break;

    case 5:
      if (window.screen <= 320) {
        responsive = 'small5';
      }
      if (windowScreen <= 414) {
        responsive = 'medium4';
      }
      responsive = 'big5';
      break;

    default:
      break;
  }

  return responsive;
};

export default checkScreen;
