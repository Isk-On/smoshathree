import React from 'react'
import s from "./Cards.module.scss"
import Map from "../../assets/Images/Map.jpg"
import Inter from "../../assets/Images/InterDota.jpeg"
import summer from "../../assets/Images/summer.jpg"

const Cards = () => {
  return (
    <div className={s.root}>
    <div className={s.Card1}>
        <img className={s.image1} src={summer} alt="" />
    </div>
    <div className={s.Card2}>
        <img className={s.image2} src={Inter} alt="" />
    </div>
    <div className={s.Card3}>
        <img className={s.image3} src={Map} alt="" />
    </div>
    </div>
  )
}

export default Cards