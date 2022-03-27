/* eslint-disable no-plusplus */
import img from '../image/dog.jpg';

const createImage = (size) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const image = new Image();
  image.src = img;

  const imagePieces = [];
  const td = document.querySelector('td');
  const imageSize = image.width / size;

  canvas.width = td.offsetWidth;
  canvas.height = td.offsetHeight;

  for (let row = 0; row < size; ++row) {
    for (let column = 0; column < size; ++column) {
      context.drawImage(
        image,
        imageSize * column,
        imageSize * row,
        imageSize,
        imageSize,
        0,
        0,
        canvas.width,
        canvas.height
      );

      imagePieces.push(canvas.toDataURL());
    }
  }

  return imagePieces;
};

export default createImage;
