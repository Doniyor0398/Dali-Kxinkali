import React from "react";
import axios from "axios";
import styles from "./CustomSlider.module.css";

import "../../assets/general-styles/styles.css";

const Card = ({ elem, settings, Slider }) => {
  async function addToCart() {
    const token = await sessionStorage.getItem("auth_token");

    const res = await axios.post(
      `http://127.0.0.1:8000/api/goods/${Number(elem.id)}/shopping_cart/`,
      null,
      {
        headers: {
          authorization: `Token ${token}`,
        },
      }
    );
  }

  return (
    <Slider>
      <div className={styles.CardCarousel}>
        <img
          src={elem.src}
          alt=""
          className={styles.img}
          style={{ width: "100%", margin: " 0 auto" }}
        />
        <div className="title">{elem.title}</div>
        <div className={styles.BoxWeightSubTitle}>
          <div className="title">{elem.subtitle}</div>
          <span className="weight">{elem.weight}г</span>
        </div>
        <div className="btns">
          <p className="price">{elem.price}.руб</p>
          <button className="btn" onClick={() => addToCart()}>
            + В корзину
          </button>
        </div>
      </div>
    </Slider>
  );
};

export default Card;
