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

export {getRandomNumber, getRandomArrayElement, getArrayOfNumber};
