import {MAX_HASHTAG_LENGTH, MAX_DESCRIPTION_LENGTH, HASHTAG_REGEX, MAX_HASHTAG_QUANTITY} from './data.js';
import {checkLength, checkValuesNotRepeat} from './util.js';

const imgForm = document.querySelector('.img-upload__form');
const textHashtag = imgForm.querySelector('.text__hashtags');
const textDescription = imgForm.querySelector('.text__description');

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

const validateLengthDescription = (value) => checkLength(value, MAX_DESCRIPTION_LENGTH);
const validateHashtagLength = (value) => value.split(' ').length <= MAX_HASHTAG_LENGTH;
const validateHashtagFormat = (value) => {
  if (value === '') {
    return true;
  }
  else {
    return value.split(' ').every((hashtag) => HASHTAG_REGEX.test(hashtag));
  }
};
const validateHashtagQuantity = () => checkLength(textHashtag.value.split(' '), MAX_HASHTAG_QUANTITY);
const validateHashtagUninqueness = (value) => checkValuesNotRepeat(value);

pristine.addValidator(
  textDescription,
  validateLengthDescription,
  `Не более ${MAX_DESCRIPTION_LENGTH} символов`
);

pristine.addValidator(
  textHashtag,
  validateHashtagLength,
  `Не более ${MAX_HASHTAG_LENGTH} символов`
);

pristine.addValidator(
  textHashtag,
  validateHashtagFormat,
  'Хэш-тег должен начинаться с # и состоять из букв или цифр'
);

pristine.addValidator(
  textHashtag,
  validateHashtagQuantity,
  `Не более ${MAX_HASHTAG_QUANTITY} хэш-тегов`
);

pristine.addValidator(
  textHashtag,
  validateHashtagUninqueness,
  'Хэш-теги не должны повторяться'
);

export {pristine};
