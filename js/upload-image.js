import {pristine} from './operate-form.js';
import {isEscapeKey} from './util.js';
import {addEffectsListener, installSlider, removeEffectsListener} from './apply-effect.js';
import {sendData} from './api.js';
import { DEFAULT_SIZE } from './data.js';
import { scaleImg } from './scale-picture.js';

const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const closeButton = imgUploadForm.querySelector('.img-upload__cancel');
const textHashtag = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

const bringToDefaults = () => {
  scaleImg(DEFAULT_SIZE);
  installSlider('none');
  textHashtag.value = '';
  textDescription.value = '';
};

const propagationStop = (evt) => {
  evt.stopPropagation();
};

const closeImgOverlay = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeButtonListener);
  document.removeEventListener('keydown', escListener);
  textHashtag.removeEventListener('keydown', propagationStop);
  textDescription.removeEventListener('keydown', propagationStop);
  uploadFile.value = '';
  removeEffectsListener();
};

function escListener(evt) {
  if (isEscapeKey(evt)) {
    imgUploadForm.reset();
    closeImgOverlay();
  }
}

function closeButtonListener() {
  closeImgOverlay();
}

const openImgOverlay = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  bringToDefaults();
  textHashtag.addEventListener('keydown', propagationStop);
  textDescription.addEventListener('keydown', propagationStop);
  closeButton.addEventListener('click', closeButtonListener);
  document.addEventListener('keydown', escListener);
  addEffectsListener();
};

const setUserFormSubmit = (onSuccess, onError) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      sendData(
        () => onSuccess(),
        () => onError(),
        new FormData(evt.target)
      );
    }
  });
};

imgUploadInput.addEventListener('change', (evt) => {
  evt.preventDefault();
  openImgOverlay();
});

export{setUserFormSubmit};
