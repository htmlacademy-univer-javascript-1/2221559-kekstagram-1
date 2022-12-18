import {getData} from './api.js';
import {showErrorUploadMessage, showSuccessUploadMessage, setUserFormSubmit} from './upload-image.js';
import {drawThumbnails, applyFilters} from './draw-thumbnails.js';
import {showAlert, debounce} from './util.js';

getData(
  (pictures) => {
    drawThumbnails(pictures);
    applyFilters(
      debounce(() => drawThumbnails(pictures))
    );
  },
  () => {
    showAlert('Не удалось загрузить данные. Перезагрузите страницу, либо попробуйте позже.');
  });

setUserFormSubmit(
  () => {
    showSuccessUploadMessage();
  },
  () => {
    showErrorUploadMessage();
  }
);
