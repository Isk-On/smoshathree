import React from "react";
import Header from "../../components/header/Header";
import s from "./Home.module.scss";
import video from "../../assets/gifs/dota.gif";
import Location from "../../assets/Images/Location.jpg";
import Cards from "../../components/Cards/Cards";
import pic from "../../assets/Images/YourMother.jpg";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.Container}>
        <p>«СОВРЕМЕННЫЙ МНОГОПОЛЬЗОВАТЕЛЬСКИЙ ШЕДЕВР»</p>
        <p className={s.title}>DESTRUCTOID</p>
      </div>

      <img className={s.video} src={video} alt="" />
      <div className={s.Black}>
        <Cards />
      </div>
      <div className={s.contain}>
        <img className={s.Location} src={Location} alt="" />
        <p className={s.g}>ПРИСОЕДИНИТЕСЬ К</p>
        <p className={s.k}>БИТВЕ ДРЕВНИХ</p>
      </div>
      <div className={s.black_square}>
        <p className={s.text}>
          Каждый день миллионы игроков по всему миру вступают в командную битву
          5 на 5 в роли одного из более чем сотни героев. Dota — глубочайшая
          многопользовательская стратегия всех времён, в которой всегда найдётся
          место новой стратегии или тактике. Она совершенно бесплатна, и это не
          поменяется — начинайте защищать своего Древнего уже сейчас.
        </p>
        <button>Свежие Новости</button>
      </div>
      <div className={s.content}>
        <img src={pic} alt="" />
        <p>КОГО ВЫ</p>
        <h2>ВЫБЕРЕТЕ?</h2>
        <h1>
          Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы
          встретите и магов-тактиков, и свирепых громил, и хитроумных негодяев.
          Их невероятные способности и сокрушительные ульты непременно приведут
          вас к победе.
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
