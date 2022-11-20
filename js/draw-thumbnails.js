import {createPhotosOfUser} from './create-data.js';

const listPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const pictures = createPhotosOfUser();
const picturesFragment = document.createDocumentFragment();

pictures.forEach((url, likes, comments) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesFragment.appendChild(pictureElement);
});

listPictures.appendChild(picturesFragment);

export {pictures};
