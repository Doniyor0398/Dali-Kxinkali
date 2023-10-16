import React, { useEffect, useState } from "react";
import styles from "./MainReserve.module.css";
import "../../assets/general-styles/styles.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Button, Container, TextField } from "@mui/material";
import Zal from "./zal/Zal";
import Veranda from "./veranda/Veranda";

const MainReserve = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTableNumber, setShowTableNumber] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestsCount, setGuestsCount] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [optional, setOptional] = useState("");
  const [place, setPlace] = useState("");

  const handler = {
    name: (e) => {
      setName(e.target.value);
    },
    phone: (e) => {
      setPhone(e.target.value);
    },
    optional: (e) => {
      setOptional(e.target.value);
    },
    time: (e) => {
      setTime(`${e["$d"]}`.slice(15, 34));
    },
    date: (e) => {
      setDate(`${e["$d"]}`.slice(0, 15));
      console.log(`${e["$d"]}`.slice(4, 15));
    },
    guestsCount: (e) => {
      setGuestsCount(e.target.value);
    },
    place: (e) => {
      setPlace(e.target.value);

      setShowTableNumber(
        e.target.value === "Зал" || e.target.value === "Веранда"
      );

      if (e.target.value === "Зал") {
        setIsModalOpen(true);
      } else if (e.target.value === "Веранда") {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    },
    placeZal: (num) => {
      setPlace(num);
    },
    placeVeranda: (num) => {
      setPlace(num);
    },
  };

  return (
    <>
      <div id="table-reserve">
        <div className={styles.backgroundBodyReserve}>
          <h3 className="title__pages_all">Резерв стола</h3>

          <Container className={styles.ContainerCenter}>
            <div className="container__reserve reserve">
              {/* Зал__и__веранда */}

              <div className="reserve__title__subtitle">
                <div className={styles.SelectReserveSelectRow}>
                  <div className="reserve__subtitle__left">Зал / Веранда</div>
                  <select
                    aria-invalid="false"
                    className={styles.ReserveOption}
                    onChange={handler.place}
                    onClick={handler.place}
                  >
                    <option disabled selected>
                      Выбрать
                    </option>
                    <option value="Зал">Зал</option>
                    <option value="Веранда">Веранда</option>
                  </select>
                  {showTableNumber && (
                    <span className={styles.spanReserve}>
                      {" Стол №:"} {place.indexOf("Table") && `${place}`}
                    </span>
                  )}
                </div>
              </div>
              {isModalOpen ? (
                place === "Зал" ? (
                  <Zal closeModal={closeModal} handler={handler.placeZal} />
                ) : (
                  <Veranda
                    closeModal={closeModal}
                    handler={handler.placeVeranda}
                  />
                )
              ) : null}

              {/* Дата__и__время */}
              <div className="reserve__title__subtitle">
                <div className="reserve__subtitle__left">Дата / Время</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <DatePicker
                      // !Убрать border у data and time

                      slotProps={{ textField: { variant: "standard" } }}
                      sx={{
                        width: "100%",
                        svg: { color: "#fff" },
                        input: { color: "#fff" },
                        label: {
                          color: "#fff",
                          fontSize:
                            "calc(15px + 12 * ((100vw - 320px) / (1920 - 320)))",
                          fontFamily: "Lato",
                          marginLeft: "6px",
                        },
                      }}
                      label="Выбрать дату"
                      variant="standard"
                      onChange={handler.date}
                    />

                    <TimePicker
                      // !Убрать border у data and time
                      slotProps={{ textField: { variant: "standard" } }}
                      sx={{
                        width: "100%",
                        svg: { color: "#fff" },
                        input: { color: "#fff" },
                        label: {
                          color: "#fff",
                          fontSize:
                            "calc(15px + 12 * ((100vw - 320px) / (1920 - 320)))",
                          fontFamily: "Lato",
                          marginLeft: "6px",
                        },
                      }}
                      label="Выбрать время"
                      ampm={false}
                      onChange={handler.time}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>

              {/* Имя  */}
              <div className="reserve__title__subtitle">
                <div className="reserve__subtitle__left">Имя</div>
                <TextField
                  InputProps={{
                    sx: {
                      "& input": {
                        color: "#fff",
                        width: "479px",
                        fontFamily: "Lato",
                      },
                    },
                  }}
                  required
                  autoFocus
                  margin="dense"
                  id="date"
                  placeholder="Ваше имя"
                  color="black"
                  variant="standard"
                  value={name}
                  onChange={handler.name}
                />
              </div>

              {/* Телефон  */}
              <div className="reserve__title__subtitle">
                <div className="reserve__subtitle__left">Телефон</div>

                <TextField
                  InputProps={{
                    sx: {
                      "& input": {
                        color: "#fff",
                        width: "479px",
                        fontFamily: "Lato",
                      },
                    },
                  }}
                  required
                  autoFocus
                  margin="dense"
                  id="date"
                  placeholder="Ваш телефон"
                  color="black"
                  variant="standard"
                  value={phone}
                  onChange={handler.phone}
                />
              </div>

              {/* Число гостей   */}
              <div className="reserve__title__subtitle">
                <div className={styles.SelectReserveSelectRow}>
                  <div className="reserve__subtitle__left">Кол-во гостей </div>
                  <form action="#" method="post">
                    <input
                      className={styles.ReserveOption}
                      onChange={handler.guestsCount}
                      type="number"
                      // placeholder="1 - 50"
                      required
                      min="1"
                      max="50"
                    />
                  </form>
                </div>
              </div>

              {/* По желанию  */}
              <div className="reserve__title__subtitle">
                <div className="reserve__subtitle__left">Комментарий</div>
                <TextField
                  InputProps={{
                    sx: {
                      "& input": {
                        color: "#fff",
                        width: "479px",
                        fontFamily: "Lato",
                      },
                    },
                  }}
                  autoFocus
                  margin="dense"
                  id="date"
                  placeholder="По желанию"
                  color="black"
                  variant="standard"
                  value={optional}
                  onChange={handler.optional}
                />
              </div>

              {/* Button__Bron */}
              <div className="reserve__buttton">
                <Button
                  className="reserve__order__button"
                  style={{
                    borderRadius: "20px",
                  }}
                >
                  Забронировать
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default MainReserve;
