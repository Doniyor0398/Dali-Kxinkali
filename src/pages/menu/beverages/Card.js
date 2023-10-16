import React, { useEffect } from "react";
import axios from "axios";
import styles from "./Beverages.module.css";
import "../../../assets/general-styles/styles.css";

const Card = ({ elem }) => {
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
    <div className="CardContainer">
      <div className={styles.cardSalat} key={elem.id}>
        <div className="ImgField imgBeverage">
          <img className="image hoverBeverage" src={elem.src} alt="" />
        </div>
        <div className="cardTitle">{elem.title}</div>
        <div className={styles.BoxWeightSubTitle}>
          <div className="title">{elem.subtitle}</div>
          <span className="weight">{elem.weight}</span>
        </div>
        <div className="btns">
          <p className="price">{elem.price}.руб</p>
          <button className="btn" onClick={() => addToCart()}>
            + В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
