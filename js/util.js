import {ALERT_SHOW_TIME} from './data.js';

function getRandomNumber(leftNumber, rightNumber) {
  if ((leftNumber >= 0) && (leftNumber < rightNumber)) {
    return Math.floor(Math.random() * (rightNumber - leftNumber) + leftNumber);
  }
  if(leftNumber > rightNumber) {
    return Math.floor(Math.random() * (leftNumber - rightNumber) + rightNumber);
  }
  if (leftNumber === rightNumber) {
    return leftNumber;
  }
  return ('error');
}

const getArrayOfNumber = (maxNumber) => {
  const array = [];
  for (let i = 0; i < maxNumber; i++) {
    array.push(i + 1);
  }
  return array;
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const checkLength = (string, maxLength) => string.length <= maxLength;
const checkValuesNotRepeat = (arr) => arr.toLowerCase().split(' ').length === new Set(arr.toLowerCase().split(' ')).size;

const showAlert = (message, color) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = color;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomNumber, getRandomArrayElement, getArrayOfNumber, isEscapeKey, checkLength, checkValuesNotRepeat,
  showAlert};
