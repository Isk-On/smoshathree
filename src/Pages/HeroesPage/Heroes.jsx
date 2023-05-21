import React from "react";
import Header from "../../components/header/Header";
import s from "./Heroes.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../../assets/gifs/SF.gif"
import background from "../../assets/Images/background.jpg"

const Heroes = () => {

  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get("https://64107a00c3639725adb6ed73.mockapi.io/hotel")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setData2(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className={s.root} style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className={s.container}>
        {/* <p>ВЫБЕРИТЕ ГЕРОЯ</p> */}
        <p>
          Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы
          встретите и магов-тактиков, и свирепых громил, и хитроумных негодяев.
          Их невероятные способности и сокрушительные ульты непременно приведут
          вас к победе.
        </p>
      </div>
      
      <div className={s.content}>
          {Data.length > 0 ? (
            <>
              {Data.map((arr, i) => {
                return (
                  <div key={arr.id}>
                    <div className={s.cards}>
                      <img src={arr.img} alt="" />

                          </div>
                        </div>
                );
              })}
            </>
          ) : (
            <>
              <h1>
                <img src={Loader} alt="" />
              </h1>
            </>
          )}
        </div>

    </div>
  );
};

export default Heroes;
