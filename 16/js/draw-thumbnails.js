import {drawBigPicture} from './draw-big-picture.js';
import {getRandomElements} from './util.js';
import {RANDOM_PHOTOS_COUNT} from './data.js';

const listPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();
const imgFilters = document.querySelector('.img-filters');

const compareByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const filters = {
  filterDefault: (photos) => photos,
  filterRandom: (photos) => getRandomElements(photos, RANDOM_PHOTOS_COUNT),
  filterDiscussed: (photos) => photos.sort(compareByComments)
};

const clearThumbnails = () => {
  const thumbnails = listPictures.querySelectorAll('.picture');
  if (thumbnails.length !== 0) {
    thumbnails.forEach((thumbnail) => {
      thumbnail.remove();
    });
  }
};

const drawThumbnails = (picturesData) => {
  clearThumbnails();
  const filter = imgFilters.querySelector('.img-filters__button--active').id
    .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  filters[filter](picturesData.slice()).forEach((photo) => {
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
};

const applyFilters = (callback) => {
  imgFilters.classList.remove('img-filters--inactive');
  imgFilters.addEventListener('click', (evt) => {
    const current = imgFilters.querySelector('.img-filters__button--active');
    if (evt.target.tagName !== 'BUTTON') {
      return;
    }
    current.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    callback();
  });
};

export {drawThumbnails, applyFilters};
