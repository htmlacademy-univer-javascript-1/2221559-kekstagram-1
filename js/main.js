import './draw-thumbnails.js';
import './upload-image.js';
import './scale-picture.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './upload-image.js';
import {drawThumbnails} from './draw-thumbnails.js';
import {showAlert} from './util.js';

getData(
  (pictures) => {
    drawThumbnails(pictures);
  },
  () => {
    showAlert('Не удалось загрузить данные. Перезагрузите страницу либо попробуйте позже.', 'red');
  });
setUserFormSubmit(
  () => {
    showAlert('Изображение загружено.', 'green');
  },
  () => {
    showAlert('Не удалось загрузить данные. Перезагрузите страницу либо попробуйте позже.', 'red');
  }
);
