import { isEscapeKey } from './util.js';

// вывод и закрытие окон об ошибке или сообщения об успешной отправке формы
const SHOW_GET_DATA_ERROR_TIME = 5000;

const dataErrorMessage = document.querySelector('#data-error').content.querySelector('.data-error');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

// ошибка загрузки данных с сервера
const showGetDataError = () => {
  document.body.appendChild(dataErrorMessage);

  setTimeout(() => {
    dataErrorMessage.remove();
  }, SHOW_GET_DATA_ERROR_TIME);
};

// показ сообщения об успешной отправке формы
const onSuccessDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onSuccessDocumentKeydown);
  }
};

const showPostSucsessMessage = () => {
  const newSuccessMessage = successMessage.cloneNode(true);
  document.body.append(newSuccessMessage);
  document.addEventListener('keydown', onSuccessDocumentKeydown);
  newSuccessMessage.addEventListener('click', ({ target }) => {
    if (target.classList.contains('success') || target.classList.contains('success__button')) {
      newSuccessMessage.remove();
      document.removeEventListener('keydown', onSuccessDocumentKeydown);
    }
  });
};

// показ сообщения об ошибке при отправке формы
const onErrorDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.querySelector('.error').remove();
    document.removeEventListener('keydown', onErrorDocumentKeydown);
  }
};

const showPostErrorMessage = () => {
  const newPopup = errorMessage.cloneNode(true);
  document.body.append(newPopup);
  document.addEventListener('keydown', onErrorDocumentKeydown);

  newPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains('error') || target.classList.contains('error__button')) {
      newPopup.remove();
      document.removeEventListener('keydown', onSuccessDocumentKeydown);
    }
  });
};

export { showGetDataError, showPostSucsessMessage, showPostErrorMessage };
