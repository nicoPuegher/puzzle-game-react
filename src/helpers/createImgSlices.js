/* eslint-disable no-unused-vars */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-plusplus */

const createImage = (image) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const imagePieces = [];
  const imageSize = image.width / 3;

  const td = document.querySelector('td');
  canvas.width = td.offsetWidth;
  canvas.height = td.offsetWidth;

  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
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
  imagePieces.splice(0, 0, 'empty');
  imagePieces.splice(imagePieces.length - 1, 1, '');
  return imagePieces;
};

const createImgSlices = (img) =>
  new Promise(async (res, rej) => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      res(createImage(image));
    };
  });

export default createImgSlices;
