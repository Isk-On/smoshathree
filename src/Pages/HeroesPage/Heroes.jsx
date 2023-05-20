import React from "react";
import Header from "../../components/header/Header";
import s from "./Heroes.module.scss";

const Heroes = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.container}>
        <h1>ВЫБЕРИТЕ ГЕРОЯ</h1>
        <p>
          Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы
          встретите и магов-тактиков, и свирепых громил, и хитроумных негодяев.
          Их невероятные способности и сокрушительные ульты непременно приведут
          вас к победе.
        </p>
      </div>
    </div>
  );
};

export default Heroes;
