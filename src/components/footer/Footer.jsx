import React from "react";
import s from "./Footer.module.scss";
import logo from "../../assets/icons/valve_logo.png";
import logo2 from "../../assets/icons/dota_footer_logo.png";

const Footer = () => {
  return (
    <div className={s.root}>
        <div className={s.div}>
      <img className={s.logo} src={logo} alt="" />
      <img className={s.logo2} src={logo2} alt="" />
      </div>
      <p>
        Dota и логотип Dota являются товарными знаками и/или зарегистрированными
        товарными знаками Valve Corporation. 2023 Valve Corporation, все права
        защищены.
      </p>
    </div>
  );
};

export default Footer;
