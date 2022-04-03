/* eslint-disable no-unused-vars */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-plusplus */
const createImage = (image, size) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const imagePieces = [];
  const imageSize = image.width / size;

  const td = document.querySelector('td');
  canvas.width = td.offsetWidth;
  canvas.height = td.offsetWidth;

  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
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

const createImgSlices = (img, size) =>
  new Promise(async (res, rej) => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      res(createImage(image, size));
    };
  });

export default createImgSlices;
