
export const BASE_URL = 'https://auth.nomoreparties.co';

function getResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    getResponse(res)
  })
  .catch((err) => console.log(err));
};

export const authorization = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    getResponse(res)
  })
  .catch((err) => console.log(err));
}

export const validityToken = (token) => {
  return fetch(`${BASE_URL}/user/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    } 
  })
  .then((res) => {
    getResponse(res)
  })
  .catch((err) => console.log(err));
}

