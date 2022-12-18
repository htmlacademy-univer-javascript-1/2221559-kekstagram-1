import {EFFECTS} from './data-constants.js';

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const uploadedImgPrewiev = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const slider = document.querySelector('.img-upload__effect-level');

let currentFilter = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECTS[currentFilter].min,
    max: EFFECTS[currentFilter].max,
  },
  start: EFFECTS[currentFilter].max,
  step: EFFECTS[currentFilter].step,
  connect: 'lower',
});

const installSlider = (filter) => {
  if (filter === 'none') {
    slider.classList.add('hidden');
    uploadedImgPrewiev.style.filter = 'none';
    currentFilter = 'none';
    return;
  }
  slider.classList.remove('hidden');
  uploadedImgPrewiev.classList.remove(`effects__preview--${currentFilter}`);
  currentFilter = filter;
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: EFFECTS[filter].min,
      max: EFFECTS[filter].max,
    },
    step: EFFECTS[filter].step,
    start: EFFECTS[filter].max,
  });
  uploadedImgPrewiev.classList.add(`effects__preview--${filter}`);
  uploadedImgPrewiev.style.filter = `${EFFECTS[filter].filter}(${effectLevelValue}${EFFECTS[filter].unit})`;
};

sliderElement.noUiSlider.on('update', () => {
  effectLevelValue.value = sliderElement.noUiSlider.get();
  uploadedImgPrewiev.style.filter = `${EFFECTS[currentFilter].filter}(${effectLevelValue.value}${EFFECTS[currentFilter].unit})`;
});

const changeImgEffect = (evt) => {
  const effectsItem = evt.target.closest('.effects__item');
  if (effectsItem) {
    installSlider(effectsItem.querySelector('.effects__radio').value);
  }
};

const addEffectsListener = () => {
  effectsList.addEventListener('click', changeImgEffect);
};

const removeEffectsListener = () => {
  effectsList.removeEventListener('click', changeImgEffect);
};

export {addEffectsListener, removeEffectsListener, installSlider};
