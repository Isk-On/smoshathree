import React from "react";
import Header from "../../components/header/Header";
import video from "../../assets/gifs/dota.gif"
import s from "./Home.module.scss"

const Home = () => {
  return (
  <div className={s.root}>
    <Header/>
    <img src={video} alt="" />
  </div>
  );
};

export default Home;
