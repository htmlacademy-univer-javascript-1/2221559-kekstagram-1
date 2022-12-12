import {getArrayOfNumber} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!' ];

const NAMES = [
  'Артём',
  'Света',
  'Вася',
  'Петя',
  'Маша',
  'Даша' ];

const EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
  },

  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },

  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },

  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const ARRAY_ID = getArrayOfNumber(1000);

const MAX_HASHTAG_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;
const HASHTAG_REGEX = /^#[a-zа-яё0-9]/i;
const MAX_HASHTAG_QUANTITY = 5;
const LOAD_COMMENTS = 5;

const DEFAULT_SIZE = 100;
const MIN_SIZE = 25;
const MAX_SIZE = 100;
const SIZE_STEP = 25;


export {
  MESSAGES,
  NAMES,
  ARRAY_ID,
  MAX_HASHTAG_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  HASHTAG_REGEX,
  MAX_HASHTAG_QUANTITY,
  LOAD_COMMENTS,
  EFFECTS,
  DEFAULT_SIZE,
  MIN_SIZE,
  MAX_SIZE,
  SIZE_STEP
};
