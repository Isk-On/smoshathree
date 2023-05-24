import React from "react";
import s from "./Cards.module.scss";
import Map from "../../assets/Images/Map.jpg";
import Inter from "../../assets/Images/InterDota.jpeg";
import summer from "../../assets/Images/summer.jpg";

const Cards = () => {
  return (
    <div className={s.root}>
      <div className={s.cards}>
        <div className={s.card}>
          <div className={s.image}>
            <div className={s.img}>
              <img src={summer} alt="" />
            </div>
            <div className={s.imageText}>
              <h3>11 МАЯ 2023 Г.</h3>
              <h2>Начало летнего тура</h2>
              <p>
                Концовка весеннего тура выдалась <br /> захватывающая: на
                прошлых выходных <br /> команда Gaimin Gladiators продолжила
                серию <br />
                блистательных триумфов, начавшуюся два <br /> месяца назад в
                Лиме.
              </p>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.image}>
            <div className={s.img}>
              <div className={s.hr}></div>
              <img src={Inter} alt="" />
              <div className={s.imageText}>
                <h3>lorem</h3>
                <h2>The internation 2023</h2>
                <p>
                  Спешим сообщить: в этом октябре The <br /> International возвращается
                  в Сиэтл. Лучшие <br /> команды со всего мира сразятся за Эгиду <br />
                  чемпионов на стадионе Climate Pledge Arena, <br /> который вместит 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.image}>
            <div className={s.img}>
              <img src={Map} alt="" />
              <div className={s.imageText}>
                <h3>lorem</h3>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione <br />
                  odit, et ut doloremque praesentium mollitia, commodi veniam=
                  <br />
                  totam sequi dolorum, officia est ipsum inventore nulla alias?
                  <br />
                  Perferendis ad pariatur rerum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
