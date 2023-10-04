import React, { useEffect, useState } from "react";
import Basket from "../../../assets/img/basket__icon.png";
import Delete from "../../../assets/img/deleteBasket.png";
import Salat from "../../../assets/img/salat.png";
import styles from "../Header.module.css";
import productsData from "./Basket-data";
import BasketItemComponent from "./BasketItemComponent";
import Close from "../../../assets/img/X_close.png";

const BasketComponent = ({ closeModal, products, basketItems }) => {
  // Создаем состояние для хранения счетчиков товаров

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Функция для вычисления общей стоимости товаров
  // const calculateTotalPrice = () => {
  //   let total = 0;
  //   productsData.forEach((product) => {
  //     const count = productCounts[product.id] || 0;
  //     total += count * product.price;
  //   });
  //   return total;
  // };

  return (
    <div>
      <div className={styles.modal} onClick={handleModalClick}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={styles.close} onClick={closeModal}>
            <img src={Close} alt="" />
          </span>
          <div className={styles.modalBasketRow}>
            <div className={styles.modalBasketTextRow}>
              <img  className={styles.basketIcon} src={Basket} alt="" />
              <p>Корзина</p>
              <img className={styles.imgModalDelete} src={Delete} alt="" />
            </div>
          </div>
          <span
            style={{
              background: "#D9D9D9",
              width: "100%",
              height: "2px",
              display: "block",
              margin: "0 0 22px 0",
            }}
          ></span>
        </div>

        {basketItems.length > 0 &&
          basketItems.map((product) => (
            <BasketItemComponent product={product} />
          ))}
        <div className={styles.BoxDeliveryBasket}>
          <div>Доставка</div>
          <span>0 руб.</span>
        </div>
        <span
          style={{
            background: "#D9D9D9",
            width: "100%",
            height: "2px",
            display: "block",
            margin: "25px 0 27px 0",
          }}
        ></span>
        <div className={styles.sumBasket}>
          <div className={styles.sumBasketTotal}>Итого:</div>
          <span className={styles.sumBasketTotal}>
            {/* {calculateTotalPrice()}  */}
            руб.
          </span>
        </div>
        <div className={styles.buttonBasketOrder}>
          <button className={styles.basketOrder}>Заказать</button>
        </div>
      </div>
    </div>
  );
};

export default BasketComponent;
