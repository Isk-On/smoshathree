import React from "react";
import Header from "../../components/header/Header";
import s from "./Home.module.scss";
import video from "../../assets/gifs/dota.gif";
import Location from "../../assets/Images/Location.jpg";
import Cards from "../../components/Cards/Cards";
import pic from "../../assets/Images/YourMother.jpg"

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
      </div>
    </div>
  );
};

export default Home;
