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
const closeUploadSuccessMessageByEsc = (evt) => {
  evt.preventDefault();
  successMessage.remove();
};

const showPostSucsessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', closeUploadSuccessMessageByEsc);
};

successMessage.addEventListener('click', ({ target }) => {
  if (target.classList.contains('success') || target.classList.contains('success__button')) {
    successMessage.remove();
    document.removeEventListener('keydown', closeUploadSuccessMessageByEsc);
  }
});

// показ сообщения об ошибке при отправке формы
const closeUploadErrorMessageByEsc = (evt) => {
  evt.preventDefault();
  errorMessage.remove();
};

const showPostErrorMessage = () => {
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', closeUploadErrorMessageByEsc);
};

errorMessage.addEventListener('click', ({ target }) => {
  if (target.classList.contains('error') || target.classList.contains('error__button')) {
    errorMessage.remove();
    document.removeEventListener('keydown', closeUploadSuccessMessageByEsc);
  }
});

export { showGetDataError, showPostSucsessMessage, showPostErrorMessage };
