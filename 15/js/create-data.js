import {MESSAGES, NAMES, ARRAY_ID} from './data.js';
import {getRandomArrayElement, getRandomNumber} from './util.js';

let numberId = 0;

const createComment = () => {
  const ID_USER = getRandomArrayElement(ARRAY_ID);
  ARRAY_ID.splice(ARRAY_ID.indexOf(ID_USER), 1);
  return {
    id: ID_USER,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const  createPhoto = () => {
  numberId += 1;
  return {
    id: numberId,
    url: `photos/${numberId}.jpg`,
    description: `Мое крутое фото № ${numberId}`,
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 10)}, createComment)
  };

};

const createPhotosOfUser = () => Array.from({length: 25}, createPhoto);

export {createPhotosOfUser};
