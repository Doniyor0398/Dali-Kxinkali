import AddServices from "../../../assets/img/addServices.png";

import styles from "./AdditionalServices.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";
// import Card from "./Card";

export default function AdditionalServices() {
  return (
    <>
      <div
        className={styles.containerBackground}
        style={{
          background: `center no-repeat url(${AddServices}) #51413a`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.ContainerLunchTitle}>
          <div className={styles.LunchTitle}>
            ПРИГОТОВЛЕНИЕ ПРАЗДНИЧНЫХ БЛЮД
          </div>
        </div>
      </div>

      <div className="_container">
        <div className={styles.subTitle}>
          <p>
            Наша услуга представляет собой идеальное решение для занятых людей,
            ценящих вкус и качество в каждом приеме пищи, но не имеющих
            достаточно времени на подготовку. Мы замаринуем и приготовим ваше
            мясо на мангале на вертеле с нежностью и вниманием к каждой детали.
            <span>
              Наши повара - настоящие мастера своего дела, они заботятся о
              выборе приправ и специй, чтобы вкус был настоящим кулинарным
              открытием.
            </span>
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.containerCardSalats}>
            {/* {Lunch.map((elem) => (
              <Card elem={elem} />
            ))} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
