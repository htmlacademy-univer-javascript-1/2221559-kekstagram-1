import {pristine} from './operate-form.js';
import {isEscapeKey} from './util.js';
import {addEffectsListener, installSlider, removeEffectsListener} from './apply-effect.js';
import {sendData} from './api.js';
import {DEFAULT_SIZE} from './data.js';
import {scaleImg} from './scale-picture.js';

const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const closeButton = imgUploadForm.querySelector('.img-upload__cancel');
const textHashtag = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

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
    evt.preventDefault();
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

const closeSuccessUploadMessage = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onSuccessEscKeydown);
  document.addEventListener('keydown', escListener);
  document.removeEventListener('click', onSuccessOuterClick);
  closeImgOverlay();
};

const showSuccessUploadMessage = () => {
  const message = successMessageTemplate.cloneNode(true);
  message.style.zIndex = '100';
  body.append(message);
  document.querySelector('.success__button').addEventListener('click', closeSuccessUploadMessage);
  document.addEventListener('keydown', onSuccessEscKeydown);
  document.removeEventListener('keydown', escListener);
  document.addEventListener('click', onSuccessOuterClick);
};

const closeErrorUploadMessage = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onErrorEscKeydown);
  document.addEventListener('keydown', escListener);
  document.removeEventListener('click', onErrorOuterClick);
};

const showErrorUploadMessage = () => {
  const message = errorMessageTemplate.cloneNode(true);
  message.style.zIndex = '100';
  body.append(message);
  document.querySelector('.error__button').addEventListener('click', closeErrorUploadMessage);
  document.addEventListener('keydown', onErrorEscKeydown);
  document.removeEventListener('keydown', escListener);
  document.addEventListener('click', onErrorOuterClick);
};

function onSuccessEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessUploadMessage();
  }
}

function onErrorEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorUploadMessage();
  }
}

function onSuccessOuterClick(evt) {
  if (evt.target.closest('.success__inner') === null) {
    closeSuccessUploadMessage();
  }
}

function onErrorOuterClick(evt) {
  if (evt.target.closest('.error__inner') === null) {
    closeErrorUploadMessage();
  }
}

imgUploadInput.addEventListener('change', (evt) => {
  evt.preventDefault();
  openImgOverlay();
});

const savingPhoto = () => {
  const uploadMessage = document.querySelector('#messages').content.querySelector('.img-upload__message');
  const photoElement = uploadMessage.cloneNode(true);
  const photoFragment = document.createDocumentFragment();
  photoFragment.append(photoElement);
  body.append(photoFragment);
};

const unSavingPhoto = () => {
  const uploadMessage = document.querySelector('.img-upload__message');
  body.removeChild(uploadMessage);
};

const setUserFormSubmit = (onSuccess, onError) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      savingPhoto();
      sendData(
        () => {
          unSavingPhoto();
          onSuccess();
        },
        () => {
          unSavingPhoto();
          onError();
        },
        new FormData(evt.target)
      );
    }
  });
};

export{showSuccessUploadMessage, showErrorUploadMessage, setUserFormSubmit};
