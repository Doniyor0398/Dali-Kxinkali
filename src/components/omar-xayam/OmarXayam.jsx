import React from "react";
import "../../assets/general-styles/styles.css";
import Styles from "./OmarXayam.module.css";
import Button from "@mui/material/Button";

export default function Omar() {
  return (
    <div className="_container">
      <div className="title__pages_all Kalyan__title">Кальян</div>

      <div className={Styles.PagesOmar} id="kalyan">
        <div className={Styles.BlockOmarTitles}>
          <h1 className={Styles.OmarTitle}>омар хайям</h1>
          <p className={Styles.OmarSubTitle}>Отдыхай в облаках вкуса!</p>
        </div>
        <div className={Styles.OmarBtn}>
          <Button
          className={Styles.buttonOmar}
            sx={{
              borderRadius: "20px",
              background: "#f69049",
              padding: "20px 85px",
              fontSize: "calc(15px + 10 * ((100vw - 320px) / (1920 - 320))) ",
              "&:hover": {
                background: "#ff6900",
                color: "#000",
              },
            }}
            variant="contained"
          >
            КАЛЬЯННАЯ КАРТА
          </Button>
        </div>
      </div>
    </div>
  );
}
