const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!' ];

const names = [
  'Артём',
  'Света',
  'Вася',
  'Петя',
  'Маша',
  'Даша' ];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getArrayOfNumber = (maxNumber) => {
  const array = [];
  for (let i = 0; i < maxNumber; i++) {
    array.push(i + 1);
  }
  return array;
};

let numberId = 0;
const arrayId = getArrayOfNumber(1000);

const createComment = () => {
  const idUser = getRandomArrayElement(arrayId);
  arrayId.splice(arrayId.indexOf(idUser), 1);
  return {
    id: idUser,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(messages),
    name: getRandomArrayElement(names),
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

const photosOfUser = Array.from({length: 25}, createPhoto);
