import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logo.svg'

function Header({userEmailOnHeader}) {
  const location = useLocation();

  return (
    <header className="header">
        <img className="header__logo" src={headerLogo} alt="Логотип Место" />
        <div className="header__links">
          <p className="header__link header__link_email">
            {location.pathname === "/" ? userEmailOnHeader : ""}
          </p>
          <Link to={
            location.pathname === "/sing-up"
            ? "/sing-in" 
            : location.pathname === "/sing-in"
            ? "/sing-up"
            : "/sing-in"
            }
            className="header__link header__link_exit"
          >
            {
              location.pathname === "/sign-up"
              ? "Войти"
              : location.pathname === "/sign-in"
              ? "Регистрация"
              : "Выйти"
            }
          </Link>
        </div>
    </header>
  )
}


export default Header;