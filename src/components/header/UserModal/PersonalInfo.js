import { Link } from "react-router-dom";
// !Icon
import Burger from "../../../assets/img/burger.png";
import Map from "../../../assets/img/map.png";
import Zakazi from "../../../assets/img/zakazi.png";
import Logout from "../../../assets/img/logout.png";

// !styles
import styles from "./UserModal.module.css";

export const PersonalInfo = ({ setPersonalModal, userInfo }) => {
  const UserPages = [
    {
      id: 0,
      icon: Burger,
      title: "Мои данные",
      onClick: () => {
        setPersonalModal("MyDetails");
      },
    },
    {
      id: 1,
      icon: Map,
      title: "Мои адреса",
      onClick: () => {
        setPersonalModal("MyAddresses");
      },
    },
    {
      id: 2,
      icon: Zakazi,
      title: "Мои заказы",
      onClick: () => {
        setPersonalModal("HistoryOfOrders");
      },
    },
    {
      id: 3,
      icon: Logout,
      title: "Выйти",
    },
  ];

  return (
    <div className={styles.PersonalInfoPages}>
      <div className={styles.UserImagesNameRow}>
        <h1 className={styles.userName}>
          {`${userInfo.first_name} ${userInfo.last_name}`}
        </h1>
        <img className={styles.userImages} src={""} alt="" />
      </div>
      <hr
        style={{
          border: "2px solid #D9D9D9",
        }}
      />

      {UserPages.map((item) => (
        <div>
          <div
            key={item.id}
            className={styles.SectionUserRow}
            onClick={item.onClick}
          >
            <img src={item.icon} alt="" />
            <Link to="/" className={styles.myDetails}>
              {item.title}
            </Link>
          </div>
          <hr
            style={{
              border: "2px solid #D9D9D9",
            }}
          />
        </div>
      ))}
    </div>
  );
};
