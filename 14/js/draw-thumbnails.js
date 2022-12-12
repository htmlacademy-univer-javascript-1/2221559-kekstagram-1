import {createPhotosOfUser} from './create-data.js';
import { drawBigPicture } from './draw-big-picture.js';

const listPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const pictures = createPhotosOfUser();
const picturesFragment = document.createDocumentFragment();

pictures.forEach((photo) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  picturesFragment.appendChild(pictureElement);

  pictureElement.addEventListener('click', () => {
    drawBigPicture(photo);
  });
});

listPictures.appendChild(picturesFragment);
