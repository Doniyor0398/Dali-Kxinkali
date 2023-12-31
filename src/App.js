import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Menu from "./pages/menu/Menu";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Drinks from "./pages/menu/beverages/Beverages";
import Lunch from "./pages/menu/business-lunch/Business-lunch";
import MenuBanner from "./pages/menu/Menu";
import AddServicesBanner from "./pages//menu/additionalServices/AdditionalServices";

import axios from "axios";
import { PrivacyPolicy } from "./components/footer/privacyPolicy/PrivacyPolicy";

const theme = createTheme({
  palette: {
    info: {
      main: "#C59D5F",
    },
    black: {
      main: "#000",
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    subtitle1: {
      fontSize: "2rem",
    },
  },
});

const pages = [
  { component: <Main />, url: "/" },
  { component: <Menu />, url: "/menu" },
  { component: <MenuBanner />, url: "/main-menu" },
  { component: <Lunch />, url: "/business-lunch" },
  { component: <Drinks />, url: "/drinks" },
  { component: <AddServicesBanner />, url: "/additionalServices" },
  { component: <PrivacyPolicy />, url: "/privacyPolicy" },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            {pages.map((page) => (
              <Route key={page.url} path={page.url} element={page.component} />
            ))}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
