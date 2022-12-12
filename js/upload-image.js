import {pristine} from './operate-form.js';
import {isEscapeKey} from './util.js';
import {addEffectsListener, removeEffectsListener, installSlider} from './apply-effect.js';

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const closeButton = imgUploadForm.querySelector('.img-upload__cancel');
const textHashtag = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');

const propagationStop = (evt) => {
  evt.stopPropagation();
};

const closeImgOverlay = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.removeEventListener('click', closeButtonListener);
  document.removeEventListener('keydown', escListener);
  textHashtag.removeEventListener('keydown', propagationStop);
  textDescription.removeEventListener('keydown', propagationStop);
  addEffectsListener();
  installSlider();
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

const imageEditor = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  textHashtag.addEventListener('keydown', propagationStop);
  textDescription.addEventListener('keydown', propagationStop);
  closeButton.addEventListener('click', closeButtonListener);
  document.addEventListener('keydown', escListener);
  removeEffectsListener();
};

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    imgUploadForm.submit();
  }
});

imgUploadInput.addEventListener('change', (evt) => {
  evt.preventDefault();
  imageEditor();
});
