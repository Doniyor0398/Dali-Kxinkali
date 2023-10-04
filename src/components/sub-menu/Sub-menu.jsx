import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import NextCard from "./img/next.svg";
import PrevCard from "./img/prew.svg";
import Images from "./Images";
import styles from "./CustomSlider.module.css";
import "../../assets/general-styles/styles.css";

const App = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div className="next">
        <img src={PrevCard} alt="" className="icon" />
      </div>
    ),
    prevArrow: (
      <div className="prew">
        <img src={NextCard} alt="" className="icon" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1030, // размер экрана 1024
        settings: {
          slidesToShow: 1, // тут меняем slidesToShow
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1430, // размер экрана 600
        settings: {
          slidesToShow: 2, // тут меняем slidesToShow
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // размер экрана 480
        settings: {
          slidesToShow: 1, // тут меняем slidesToShow
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="_container">
        <div className={styles.content}>
          <h1 className="titleCard"> Новинки в меню </h1>
          <div className={styles.container}>
            <Slider {...settings}>
              {Images.map((item) => (
                <div className={styles.CardCarousel} key={item.id}>
                  <img
                    src={item.src}
                    alt={""}
                    className={styles.img}
                    style={{ width: "100%", margin: " 0 auto" }}
                  />
                  <div className="title">{item.subtitle}</div>
                  <div className={styles.BoxWeightSubTitle}>
                    <div className="title">{item.title}</div>
                    <span className="weight">{item.weight}</span>
                  </div>
                  <div className="btns">
                    <p className="price">{item.price}</p>
                    <Link className="btn" to="/">
                      + В корзину
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
