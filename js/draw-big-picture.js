import {LOAD_COMMENTS} from './data.js';
import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const countLikes = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const description = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoaded = document.querySelector('.comments-loaded');
const loadCommentsButton = document.querySelector('.comments-loader');

let commentsLoadCount = 0;
let commentsArrayCopy = [];

const renderComments =  (commentsArrForLoad) => {
  if (commentsArrForLoad.length >= LOAD_COMMENTS) {
    commentsArrForLoad = commentsArrForLoad.slice(commentsLoadCount, commentsLoadCount + LOAD_COMMENTS);
  }
  commentsArrForLoad.forEach(({avatar, name, message}) => {
    commentsList.innerHTML += `
    <li class="social__comment">
        <img
            class="social__picture"
            src="${avatar}"
            alt="${name}"
            width="35" height="35">
        <p class="social__text">${message}</p>
    </li>`;
    commentsLoadCount += 1;
  });
  commentsLoaded.textContent = commentsLoadCount;
  if (commentsLoadCount === commentsArrayCopy.length) {
    loadCommentsButton.classList.add('hidden');
    commentsLoadCount = 0;
  }
  else {
    loadCommentsButton.classList.remove('hidden');
  }
};

const createInfoBigPicture  = (photoInfo) => {
  bigPictureImg.src = photoInfo.url;
  countLikes.textContent = photoInfo.likes;
  commentsCount.textContent = photoInfo.comments.length;
  description.textContent = photoInfo.description;
  commentsList.innerHTML = '';
  commentsArrayCopy = photoInfo.comments;
  renderComments(commentsArrayCopy.slice());
};

function addComments () {
  renderComments(commentsArrayCopy.slice());
}

const openBigPicture = function () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  loadCommentsButton.addEventListener('click', addComments);
};

const closeBigPicture = function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const closeBigPictureEsc = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const drawBigPicture = function (photoInfo) {
  openBigPicture();
  createInfoBigPicture(photoInfo);
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeBigPictureEsc);
};

export {drawBigPicture};
