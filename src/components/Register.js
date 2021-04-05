import React from 'react';

const Register = () => {
  return(
    <form className="login-form">
      <h3 className="login-form__title">Регистрация</h3>
      <input className="login-form__input login-form__input_login-email" placeholder="Email"></input>
      <input className="login-form__input login-form__input_login-pass" placeholder="Пароль"></input>
      <button className="login-form__button" type="submit">Зарегистрироваться</button>
      <p className="login-form__text">
        Уже зарегистрированы? 
        <a href="#" className="login-form__link">Войти</a>
      </p>
    </form>
  )
}

export default Register;