import React, { useState } from "react";
import styles from "../Header.module.css";

const BasketItemComponent = (product) => {
  const [productCounts, setProductCounts] = useState({});

  const increaseCount = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };

  const decreaseCount = (productId) => {
    if (productCounts[productId] > 1) {
      setProductCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };
  return (
    <div key={product.id}>
      <div className={styles.productTitlePriceRow}>
        <div className={styles.imgBasket}>
          <img
            src={
              ""
                // product.goods.images.length > 0 && product.goods.images[0]
            }
            alt=""
          />
          <div className={styles.titlePrice}>
            <p className={styles.price}>{product.price} руб.</p>
            <div className={styles.cardTitle}>{product.title}Хинкали</div>
          </div>
        </div>
        <div className={styles.boxCounter}>
          <button
            className={styles.decrease}
            onClick={() => decreaseCount(product.id)}
          >
            -
          </button>
          <span className={styles.countBasket}>
            {productCounts[product.id] || 0}
          </span>
          <button
            className={styles.increase}
            onClick={() => increaseCount(product.id)}
          >
            +
          </button>
        </div>
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
    </div>
  );
};

export default BasketItemComponent;
