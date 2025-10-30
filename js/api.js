const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getData = () => fetch(BASE_URL + route.GET_DATA)
  .then((response) => response.json());

const sendData = (onSuccess, onFail, body) => {
  fetch(
    BASE_URL + route.SEND_DATA,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      throw new Error('Error');
    }
  })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
