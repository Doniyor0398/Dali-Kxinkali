import React from "react";
import styles from "./HeaderModal.module.css";
import { NavLink } from "react-router-dom";
import Close from "../../../assets/img/X_close.png";

function HeaderModal({ pages, handleCklick }) {
  return (
    <div className={styles.toggleNavBar}>
      <img
        onClick={handleCklick}
        src={Close}
        alt=""
        className={styles.CloseIcon}
      />
      <div className={styles.NavItemBox}>
        {pages.map((elem, idx) => {
          return (
            <NavLink to={elem.url} key={idx}>
              {elem.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderModal;
