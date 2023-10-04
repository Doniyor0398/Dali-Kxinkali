import React, { useState, useEffect } from "react";
import "./taxi.css";
import ImageTaxi from "../../assets/img/taxi.jpg";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers";
import "../../assets/general-styles/styles.css";

function Taxi() {
  // const [data, setData] = useState("");
  // const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handler = {
    name: (e) => {
      setName(e.target.value);
    },
    phone: (e) => {
      setPhone(e.target.value);
    },
    address: (e) => {
      setAddress(e.target.value);
    },
  };

  

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="taxi" id="taxi">
      <div className="taxi__wrapper wrapper">
        <div className="taxi__body">
          <h2 className="taxi__title">Такси до дома</h2>
          <div className="taxi__content">
            <div className="taxi__image-block">
              <img className="taxi__image" src={ImageTaxi} alt="taxi"></img>
            </div>
            <div className="taxi__order-block">
              <p className="taxi__order-info">
                Проблема добраться домой в позднее время? <br />
                Такси Дали-Хинкали поможет решить вашу проблему
              </p>
              <Button
                className="taxi__order-button"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "18px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  width: "93%",
                }}
                onClick={handleOpen}
              >
                предзаказ
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form className="taxi__form" action="#" method="post">
          <div className="taxi__form-body">
            <h2 className="taxi__form-title">Бронирование такси</h2>

            <div className="form__data__center">
              <div className="taxi__form-field">
                <div className="taxi__form-labels">
                  <label className="taxi__form-label" for="date-select">
                    Дата
                  </label>
                  /
                  <label className="taxi__form-label" for="time-select">
                    Время
                  </label>
                </div>

                <div className="taxi__form-select-inputs">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <DatePicker
                        // !Убрать border у data and time
                        slotProps={{ textField: { variant: "standard" } }}
                        sx={{
                          width: "100%",
                        }}
                        label=""
                        variant="standard"
                      />
                      <TimePicker
                        // !Убрать border у data and time
                        slotProps={{ textField: { variant: "standard" } }}
                        sx={{
                          width: "100%",
                        }}
                        label=""
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>

              <div className="taxi__form-field">
                <label className="taxi__form-label" for="name">
                  Имя
                </label>

                <input
                  className="taxi__form-input"
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={handler.name}
                ></input>
              </div>
              <div className="taxi__form-field">
                <label className="taxi__form-label" for="phone">
                  Телефон
                </label>
                <input
                  className="taxi__form-input"
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  value={phone}
                  onChange={handler.phone}
                ></input>
              </div>
              <div className="taxi__form-field">
                <label className="taxi__form-label" for="address">
                  Адрес
                </label>
                <input
                  className="taxi__form-input"
                  id="address"
                  type="text"
                  name="address"
                  required
                  value={address}
                  onChange={handler.address}
                ></input>
              </div>
            </div>

            <Button
              className="taxi__order-button"
              type="submit"
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "15px 65px",
                borderRadius: "20px",
                fontSize: "16px",
                width: "60%",
              }}
              onClick={handleOpen}
            >
              предзаказ
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Taxi;
