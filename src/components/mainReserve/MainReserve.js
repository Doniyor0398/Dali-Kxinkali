import React, { useEffect, useState } from "react";
import styles from "./MainReserve.module.css";
import "../../assets/general-styles/styles.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Button, Container, TextField } from "@mui/material";

const MainReserve = () => {
  // hall veranda date NumberGuests Optonal

  // const [hall, setHull] = useState("");
  // const [veranda, setVeranda] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestsCount, setGuestsCount] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [optional, setOptional] = useState("");

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
  };

  useEffect(() => {
    console.log(guestsCount);
  });

  const guestsCountArr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div id="table-reserve">
        <div
          className={styles.backgroundBodyReserve}
          style={{
            background: "#F69049",
            height: "100%",
            paddingTop: "85px",
            marginTop: "320px",
          }}
        >
          <h3 className="title__pages_all">Резерв стола</h3>

          <Container
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            className={styles.ContainerCenter}
          >
            <div className="container__reserve reserve">
              {/* Зал__и__веранда */}

              <div className="reserve__title__subtitle">
                <div className={styles.SelectReserveSelectRow}>
                  <div className="reserve__subtitle__left">Зал / Веранда</div>
                  <select aria-invalid="false" className={styles.ReserveOption}>
                    <option disabled selected>
                      Выбрать
                    </option>
                    <option>Зал</option>
                    <option>Веранда</option>
                  </select>
                </div>
              </div>

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
                  <div className="reserve__subtitle__left">Число гостей </div>
                  <select
                    aria-invalid="false"
                    className={styles.ReserveOption}
                    onChange={handler.guestsCount}
                  >
                    <option disabled selected>
                      1 - 8
                    </option>
                    {guestsCountArr.map((el) => {
                      return <option value={el}>{`${el}`}</option>;
                    })}
                  </select>
                </div>
              </div>

              {/* По желанию  */}
              <div className="reserve__title__subtitle">
                <div className="reserve__subtitle__left">По желанию</div>
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
                  // onClick={handleOpen}
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
