import React from "react";
import Header from "../../components/header/Header";
import s from "./Home.module.scss";
import video from "../../assets/gifs/dota.gif";
import Location from "../../assets/Images/Location.jpg";
import Cards from "../../components/Cards/Cards";
import pic from "../../assets/Images/YourMother.jpg";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import International from "../../assets/Images/scene.jpg";
import InterIcon from "../../assets/icons/dpc.svg";
import BloodSeeker from "../../assets/Images/background4.png";


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
        <Link to="/HeroesPage" style={{ textDecoration: "none" }}>
          <button>ВСЕ ГЕРОИ</button>
        </Link>
      </div>


      <div className={s.container}>
        <img src={International} alt="" />
        <img className={s.Inter} src={InterIcon} alt="" />
        <h1>ПРОФЕССИОНАЛЬНЫЙ</h1>
        <div className={s.Contain}>
          <p>ТУРНИРНЫЙ</p>
          <p>СЕЗОН</p>
        </div>
      </div>
      <div className={s.LastBlack}>
        <p>
        Отдыхая от продвижения по системе рейтинга, вы можете учиться у лучших.
        В профессиональном сезоне вы увидите высочайший уровень соревновательной
        Доты, и следить за ним можно в клиенте игры, на Twitch и на Steam.TV. Не
        пропускайте ни одной трансляции, ведь с каждым матчем приближается самый
        большой киберспортивный турнир в мире — The International.</p>
      </div>
      <div className={s.LastContent}>
        <img src={BloodSeeker} alt="" />
        <div className={s.Text}>
        <p>ВСТУПАЙТЕ В</p>
        <h1>БИТВУ</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
