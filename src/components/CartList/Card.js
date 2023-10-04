import React, { useEffect } from 'react'
import axios from 'axios'

const Card = (elem, styles) => {
  async function addToCart() {
    const res = await axios.post(
      `http://127.0.0.1:8000/api/goods/{id}/shopping_cart/`,
      { elem },
      {
        headers: {
          "content-type": "application/json",
          authorization: `Token ${sessionStorage.getItem("auth_token")}`,
        },
      }
    );
  }

  return (
    <>
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
          <p className="price">{elem.price}</p>
          {/* <Link className="btn" to="/">
            + В корзину
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Card