import styles from "./Beverages.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";
import Card from "./Card";
import { useEffect, useState } from "react";
import { categoriesApi } from "../../../api/categories";

export default function Beverage() {
  const [usableDR, setUseableBL] = useState([]);

  useEffect(() => {
    categoriesApi.getDrinks().then((data) => {
      setUseableBL(
        data.map((el) => {
          return {
            id: el.id,
            src: el.images[0]?.images,
            title: el.title,
            subtitle: el.description,
            weight: el.weight,
            price: el.price,
          };
        })
      );
    });
  }, []);
  return (
    <>
      <div className="_container">
        <div className={styles.content}>
          <h1 className="titleCard">Напитки</h1>
          <div className={styles.containerCardSalats}>
            {usableDR.map((elem) => (
              <Card elem={elem} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
