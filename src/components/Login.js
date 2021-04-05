import React from 'react';


function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  

  return (
    <form className="login-form">
      <h3 className="login-form__title">Вход</h3>
      <input className="login-form__input login-form__input_login-email" placeholder="Email"></input>
      <input className="login-form__input login-form__input_login-pass" placeholder="Пароль"></input>
      <button className="login-form__button" type="submit">Войти</button>
    </form>
  )
}

export default Login;