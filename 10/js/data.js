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

const ARRAY_ID = getArrayOfNumber(1000);

const MAX_HASHTAG_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;
const HASHTAG_REGEX = /^#[a-zа-яё0-9]/i;
const MAX_HASHTAG_QUANTITY = 5;

export {MESSAGES, NAMES, ARRAY_ID, MAX_HASHTAG_LENGTH, MAX_DESCRIPTION_LENGTH, HASHTAG_REGEX, MAX_HASHTAG_QUANTITY};
