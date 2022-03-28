const checkScreen = (size) => {
  const windowScreen = window.screen.width;
  let responsive = '';

  switch (size) {
    case 3:
      if (windowScreen <= 320) {
        responsive = 'small3';
      } else if (windowScreen <= 414) {
        responsive = 'medium3';
      } else {
        responsive = 'big3';
        break;
      }
      break;

    case 4:
      if (windowScreen <= 320) {
        responsive = 'small4';
      } else if (windowScreen <= 414) {
        responsive = 'medium4';
      } else {
        responsive = 'big4';
      }
      break;

    case 5:
      if (windowScreen <= 320) {
        responsive = 'small5';
      } else if (windowScreen <= 414) {
        responsive = 'medium4';
      } else {
        responsive = 'big5';
      }
      break;

    default:
      break;
  }

  return responsive;
};

export default checkScreen;
