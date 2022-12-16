import {DEFAULT_SIZE, MIN_SIZE, MAX_SIZE, SIZE_STEP} from './data.js';

const lessButton = document.querySelector('.scale__control--smaller');
const moreButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview img');

const scaleImg = (value = DEFAULT_SIZE) => {
  preview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

lessButton.addEventListener('click', () => {
  let currentValue = parseInt(scaleValue.value, 10);
  currentValue -= SIZE_STEP;
  if (currentValue < MIN_SIZE) {
    currentValue = MIN_SIZE;
  }
  scaleImg(currentValue);
});

moreButton.addEventListener('click', () => {
  let currentValue = parseInt(scaleValue.value, 10);
  currentValue += SIZE_STEP;
  if (currentValue > MAX_SIZE) {
    currentValue = MAX_SIZE;
  }
  scaleImg(currentValue);
});

export {scaleImg};
