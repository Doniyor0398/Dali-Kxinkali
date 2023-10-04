import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";
//BACKGROUND AND LOOG
import logo from "../../assets/images/logo.png";
// BASKET
import basket from "../../assets/img/basket.svg";
import Basket from "../../assets/img/basket__icon.png";
import Delete from "../../assets/img/deleteBasket.png";
import Salat from "../../assets/img/salat.png";

// STYLES
import { styled } from "@mui/material/styles";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import HeaderAuth from "./headerAuth/HeaderAuth";

// components
import BasketComponent from "./basket/BasketComponent";
import axios from "axios";
import HeaderModal from "./headerModal/HeaderModal";

const StyledBadge = styled(Badge)(({ theme }) => ({
  // !Korzina border
  "& .MuiBadge-badge": {
    borderRadius: "50% !important",
    fontSize: "15.22px",
    paddingBottom: "2px",
    color: "inherit",
  },
  // !style for basket
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "#242424",
  borderRadius: "50px",
  boxShadow: 24,
  color: "#fff",
  p: "80px 70px",
};

const pages = [
  { name: "Главная", url: "/" },
  { name: "Меню ", url: "/menu" },
  { name: "Резерв стола", url: "#table-reserve" },
  { name: "Банкеты", url: "#hall" },
  { name: "Доставка", url: "#delivery" },
  { name: "КАЛЬЯН", url: "#kalyan" },
  { name: "Такси", url: "#taxi" },
  { name: "Контакты", url: "#contacts" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  function handleClickScroll(url) {
    if (typeof url === "string") {
      // Проверяем, что url - это строка
      console.log(url.slice(1));

      const element = document.getElementById(url.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // Modal
  // Состояние для отображения/скрытия модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerModal, setHeaderModal] = useState(false);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  // Функция для открытия модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const handleModalClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     closeModal();
  //   }
  // };

  // end modal
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    handleClickScroll(url);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpenSign(false);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [openSign, setOpenSign] = React.useState(false);
  const handleOpenSign = () => {
    setOpen(false);
    setOpenSign(true);
  };
  const handleCloseSign = () => setOpenSign(false);

  const [basketItems, setBasketItems] = useState([]);

  const handleCklick = () => {
    headerModal ? setHeaderModal(false) : setHeaderModal(true);
  };

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/goods/basket/", {
        headers: {
          "content-type": "application/json",
          authorization: `Token ${sessionStorage.getItem("auth_token")}`,
        },
      })
      .then((data) => setBasketItems(data.data));
  }, []);

  return (
    <>
      {/* !Logo header */}
      <AppBar
        style={{
          background: "black",
          position: "static",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100%", margin: "30px 0", padding: "0 15px" }}
          />
        </Box>
      </AppBar>
      {/* End Logo header */}

      {/* Nav bar */}
      <AppBar
        className={styles.header}
        position="static"
        style={{
          background: "#F69049",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container Container maxWidth="xl">
          {/* menu burger */}
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleCklick}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <NavLink
                    to={page.url}
                    key={page.name}
                    onClick={() => handleCloseNavMenu(page.url)}
                  ></NavLink>
                ))}
              </Menu> */}
            </Box>
            <Box
              background="red"
              ml={3}
              sx={{
                flexGrow: 1,
                gap: "2vw",
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
              style={{ padding: "50px 0" }}
            >
              {pages.map((page) => (
                <NavLink
                  to={page.url}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  key={page.name}
                  onClick={() => handleClickScroll(page.url)}
                >
                  {page.name}
                </NavLink>
              ))}
            </Box>
            {headerModal ? (
              <HeaderModal pages={pages} handleCklick={handleCklick} />
            ) : (
              ""
            )}

            {/* icon basket header */}
            <button
              to=""
              style={{ border: "none" }}
              className="cart"
              onClick={openModal}
            >
              <img src={basket} alt="" />
              <span
                className={styles.bagQuantity}
                style={{ position: "relative" }}
              >
                <span className="basket_sub">0</span>
              </span>
            </button>

            <HeaderAuth />

            {/* Модальное окно */}
            {isModalOpen && (
              <BasketComponent
                closeModal={closeModal}
                basketItems={basketItems}
              />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
