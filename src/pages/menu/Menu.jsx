import React, { useState } from "react";
import "../../assets/general-styles/styles.css";
import styles from "./Menu.module.css";
import Salat from "./salat/Salat";
import Beverage from "./beverages/Beverages";
import Snacks from "./snacks/Snacks";
import Soups from "./soups/Soups";
import Garnish from "./garnish/Garnish";
import Bekery from "./bakery/Bakery";
import HotDishes from "./hotDishes/HotDishes";
import DishesOnTheGrill from "./dishesOnTheGrill/DishesOnTheGrill";
import Sauces from "./sauces/Sauces";
import Bread from "./bread/Bread";
import Dessert from "./dessert/Dessert";

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
      return <Snacks />;
    case "Супы":
      return <Soups />;
    case "Гарниры":
      return <Garnish />;
    case "Выпечка":
      return <Bekery />;
    case "Горячие блюда":
      return <HotDishes />;
    case "Блюда на мангале":
      return <DishesOnTheGrill />;
    case "Соусы":
      return <Sauces />;
    case "Хлеб":
      return <Bread />;
    case "Десерты":
      return <Dessert />;
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
