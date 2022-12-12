import {EFFECTS} from './data.js';

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const uploadedImg = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const buttonsEffects = effectsList.querySelectorAll('.effects__radio');
const slider = document.querySelector('.img-upload__effect-level');

let currentFilter = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECTS['currentFilter'].min,
    max: EFFECTS['currentFilter'].max,
  },
  start: EFFECTS['currentFilter'].max,
  step: EFFECTS['currentFilter'].step,
  connect: 'lower',
});

const installSlider = () => {
  if (currentFilter === 'none') {
    slider.classList.add('hidden');
  } else {
    slider.classList.remove('hidden');
  }
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: EFFECTS[currentFilter].min,
      max: EFFECTS[currentFilter].max,
    },
    step: EFFECTS[currentFilter].step,
    start: EFFECTS[currentFilter].max,
  });
  uploadedImg.style.filter = `${EFFECTS[currentFilter].filter}(${effectLevelValue})`;
};

sliderElement.noUiSlider.on('update', () => {
  effectLevelValue.value = sliderElement.noUiSlider.get();
  uploadedImg.style.filter = `${EFFECTS[currentFilter].filter}(${effectLevelValue})`;
});

const changeImgEffect = () => {
  uploadedImg.classList.remove(`effects__preview--${currentFilter}`);
  buttonsEffects.forEach((button) => {
    if (button.checked) {
      currentFilter = button.value;
      installSlider();
    }
  });
  uploadedImg.classList.add(`effects__preview--${currentFilter}`);
};

const addEffectsListener = () => {
  effectsList.addEventListener('click', changeImgEffect);
};

const removeEffectsListener = () => {
  effectsList.removeEventListener('click', changeImgEffect);
};

export {addEffectsListener, removeEffectsListener, installSlider};
