import { Link } from "react-router-dom";
import Salats from "./Salat-data";
import styles from "./Salat.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";

export default function Salat() {
  return (
    <>
      <div className="_container">
        <div className={styles.content}>
          <h1 className="titleCard">Салаты</h1>
          <div className={styles.containerCardSalats}>
            {Salats.map((elem) => (
              <div className={styles.cardSalat} key={elem.id}>
                <div className="ImgField">
                  <img className="image first" src={elem.src} alt="" />
                  <img className="image second" src={elem.hover} alt="" />
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
