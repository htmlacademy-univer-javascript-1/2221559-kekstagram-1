const EFFECTS = {
  none: {
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
  },

  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  sepia: {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },

  phobos: {
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },

  heat: {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

const MAX_HASHTAG_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;
const HASHTAG_REGEX = /^#[A-Za-zА-Яа-яЁё0-9]+$/;
const MAX_HASHTAG_QUANTITY = 5;
const LOAD_COMMENTS = 5;

const DEFAULT_SIZE = 100;
const MIN_SIZE = 25;
const MAX_SIZE = 100;
const SIZE_STEP = 25;

const ALERT_SHOW_TIME = 10000;

const RANDOM_PHOTOS_COUNT = 10;
const RERENDER_DELAY = 500;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

export {MAX_HASHTAG_LENGTH, MAX_DESCRIPTION_LENGTH, HASHTAG_REGEX,
  MAX_HASHTAG_QUANTITY, LOAD_COMMENTS, EFFECTS, DEFAULT_SIZE, MIN_SIZE, MAX_SIZE, SIZE_STEP, ALERT_SHOW_TIME,
  RANDOM_PHOTOS_COUNT, RERENDER_DELAY, FILE_TYPES};
