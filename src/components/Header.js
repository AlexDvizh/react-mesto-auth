import React from 'react';
import headerLogo from '../images/logo.svg'

function Header() {
  return (
    <header className="header">
        <img className="header__logo" src={headerLogo} alt="Логотип Место" />
        <div className="header__links">
          <p className="header__link header__link_email">Регистрация</p>
        </div>
    </header>
  )
}


export default Header;