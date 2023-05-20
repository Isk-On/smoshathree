import React from 'react'
import s from "./Cards.module.scss"
import image from "../../assets/Images/scene.jpg"
import Map from "../../assets/Images/Map.jpg"

const Cards = () => {
  return (
    <div className={s.root}>
    <div className={s.Card1}>
        <img className={s.image1} src={Map} alt="" />
    </div>
    <div className={s.Card2}>
        <img className={s.image2} src={image} alt="" />
    </div>
    <div className={s.Card3}>
        <img className={s.image3} src={image} alt="" />
    </div>
    </div>
  )
}

export default Cards