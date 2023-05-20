import React from "react";
import { Link } from "react-router-dom"
import s from "./Header.module.scss"
import logo from "../../assets/icons/dota_footer_logo.png"

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.ImageContainer}>
            <img className={s.logo} src={logo} alt="" />
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
          <h1 className={s.wel}>ВОЙТИ</h1>
        <h1>Выберите</h1>
        <h1>язык</h1>
        </div>
        </div>

      </div>
      <button>
        <p className={s.play}>Играть</p>
        <p>Бесплатно</p>
      </button>
    </div>
    
  );
};

export default Header;
