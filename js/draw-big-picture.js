import { isEscapeKey } from './util';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const countLikes = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const description = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const createInfoBigPicture  = (photoInfo) => {
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  bigPictureImg.src = photoInfo.url;
  countLikes.textContent = photoInfo.likes;
  commentsCount.textContent = photoInfo.comments.length;
  description.textContent = photoInfo.description;
  commentsList.innerHTML = '';

  photoInfo.comments.forEach(({avatar, name, message}) => {
    commentsList.innerHTML += `
    <li class="social__comment">
        <img
            class="social__picture"
            src="${avatar}"
            alt="${name}"
            width="35" height="35">
        <p class="social__text">${message}</p>
    </li>`;
  });
};

const openBigPicture = function () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
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
