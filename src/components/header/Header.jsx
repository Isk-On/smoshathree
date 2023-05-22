import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.ImageContainer}>
        <div className={s.logo}></div>
      </div>
      <div className={s.container}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Игра</li>
        </Link>
        <Link to="/HeroesPage" style={{ textDecoration: "none" }}>
          <li>Герои</li>
        </Link>
        <Link to="/HeroesPage" style={{ textDecoration: "none" }}>
          <li>Новости</li>
        </Link>
        <Link to="/HeroesPage" style={{ textDecoration: "none" }}>
          <li>Киберспорт</li>
        </Link>
        <div className={s.ContainerLanguage}>
          <div className={s.text}>
            <p className={s.wel}>ВОЙТИ</p>
            <p>Выберите</p>
            <p>язык</p>
          </div>
        </div>
      </div>
      <button>
        <img className={s.steamLogo} src={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/steam_icon.svg"} alt="" />
        <div className={s.logoColumn}>
          <p className={s.play}>ИГРАТЬ</p>
          <p>БЕСПЛАТНО</p>
        </div>
      </button>
    </div>
  );
};

export default Header;
