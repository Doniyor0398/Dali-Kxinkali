import React, { useState } from "react";
import "../../assets/general-styles/styles.css";
import styles from "./Menu.module.css";
import Salat from "./salat/Salat";
// import Snacks from "./snacks/Snacks";
import Beverage from "./beverages/Beverages";

const Pages = [
  { name: "Салаты", url: "" },
  { name: "Закуски", url: "" },
  { name: "Супы", url: "/" },
  { name: "Гарниры", url: "/" },
  { name: "Выпечка", url: "/" },
  { name: "Горячие блюда", url: "/" },
  { name: "Блюда на мангале", url: "/" },
  { name: "Соусы", url: "/" },
  { name: "Хлеб", url: "/" },
  { name: "Десерты", url: "/" },
  { name: "Напитки", url: "/" },
];

const renderSwitch = (param) => {
  switch (param) {
    case "Салаты":
      return <Salat />;
    case "Закуски":
      return <Salat />;
    case "Супы":
      return <Salat />;
    case "Гарниры":
      return <Salat />;
    case "Выпечка":
      return <Salat />;
    case "Горячие блюда":
      return <Salat />;
    case "Блюда на мангале":
      return <Salat />;
    case "Соусы":
      return <Salat />;
    case "Хлеб":
      return <Salat />;
    case "Десерты":
      return <Salat />;
    case "Напитки":
      return <Beverage />;

    default:
      return "Такого блюда нет";
  }
};

const Menu = () => {
  const [cardProducts, setCardProducts] = useState("Салаты");
  console.log(cardProducts, "menuListmenuList");

  return (
    <>
      <div className="_container">
        <div className={styles.navLink}>
          {Pages.map((page) => (
            <button
              onClick={() => setCardProducts(page.name)}
              key={page.name}
              className={styles.linkMenu}
            >
              {page.name}
            </button>
          ))}
        </div>
        <hr style={{ border: "3px solid black", margin: "5px 0 0 0" }} />
        {renderSwitch(cardProducts)}
      </div>
    </>
  );
};

export default Menu;
