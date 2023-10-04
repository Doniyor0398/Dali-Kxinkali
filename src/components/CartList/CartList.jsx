import { Link } from "react-router-dom";

import TimeBackgroundLunch from "../../assets/img/biznesLanch.png";

import Lunch from "../../pages/menu/business-lunch/Business-lunch-data";
import styles from "../../pages/menu/business-lunch/Business-lunch.module.css";
import Footer from "../footer/footer";
import "../../assets/general-styles/styles.css";

export default function Businesslunch() {
  return (
    <>
      <div
        className={styles.containerBackground}
        style={{
          background: `center no-repeat url(${TimeBackgroundLunch}) #51413a`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.ContainerLunchTitle}>
          <div className={styles.LunchTitle}>ПО БУДНЯМ</div>
          <div className={styles.LunchTime}>с 12:00 до 16:00</div>
        </div>
      </div>
      <div className="_container">
        <div className="_container">
          <div className={styles.content}>
            <div className={styles.containerCardSalats}>
              {Lunch.map((elem) => (
                <Card elem={elem}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}