import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import "./App.css";
import { displayOnDesktop } from "./themes/commonStyles";

import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";

import HeaderDet from "./components/header/headerdet";
import Home from "./components/home/home";
import UnderHome from "./components/underHome/underHome";
import UpperFooter from "./components/UperFooter/UperFooter";
import FooterDet from "./components/footer/Footerdet";
import LastFooter from "./components/lastFooter/lastFooter";

import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import HostingDetails from './pages/HostingDetails';
import BecomeAHost from './pages/BecomeAHost';
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { languages } from './components/lang/languages';


function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
   
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <>
    {/* <BecomeAHost></BecomeAHost> */}

    <Router>
    
        <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/host" exact element={<BecomeAHost/>} />
        <Route path="/details" exact element={<HostingDetails/>} />


       


        </Routes>
    </Router>
   
    </>
   

    // 
  );
}

export default App;
