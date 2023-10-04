import { Link } from "react-router-dom";
import Beverages from "./Beverages-data";
import styles from "./Beverages.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";

export default function Beverage() {
  return (
    <>
      <div className="_container">
        <div className={styles.content}>
          <h1 className="titleCard">Напитки</h1>
          <div className={styles.containerCardSalats}>
            {Beverages.map((elem) => (
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
                  <Link className="btn" to="/">
                    + В корзину
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
