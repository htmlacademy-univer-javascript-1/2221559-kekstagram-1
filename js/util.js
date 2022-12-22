import {ALERT_SHOW_TIME, RERENDER_DELAY} from './data-constants.js';

const getRandomNumber = (leftNumber, rightNumber) => {
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
};

const getRandomElements = (elements, randomElementsCount) => {
  const elementNumbers = [];
  const randomElements = [];
  for(let i = 0; i < elements.length; i++){
    const number = getRandomNumber(0, elements.length - 1);
    if(elementNumbers.indexOf(number) === -1){
      randomElements.push(elements[number]);
      elementNumbers.push(number);
    }
    if(randomElements.length === randomElementsCount){
      break;
    }
  }
  return randomElements;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const checkArrElementLength = (arr, maxLength) => arr[arr.length - 1].length <= maxLength;
const checkLength = (string, maxLength) => string.length <= maxLength;
const checkValuesNotRepeat = (arr) => arr.toLowerCase().split(' ').length === new Set(arr.toLowerCase().split(' ')).size;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), RERENDER_DELAY);
  };
};

export {isEscapeKey, checkLength, checkValuesNotRepeat,
  showAlert, debounce, getRandomElements, checkArrElementLength};
