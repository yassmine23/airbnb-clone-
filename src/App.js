
import React, { useEffect } from "react";
import Box from "@mui/material/Box";


import "./App.css";

import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";

import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import HostingDetails from './pages/HostingDetails';
import BecomeAHost from './pages/BecomeAHost';
import MapPage from "./pages/MapPage";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { languages } from './components/lang/languages';
import Requestsuser from './components/Requestsuser/Requestsuser ';


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
  
    <Router>
     
    <Box
     style={{position: "sticky",top:'0' , backgroundColor:'white', zIndex:20}}
     >
          
        </Box>

        <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/host" exact element={<BecomeAHost/>} />
        <Route path="/details" exact element={<HostingDetails/>} />

        <Route path="/map" exact element={<MapPage />} />

        <Route path="/details/book" exact element={<Requestsuser/>} />


        </Routes>
    </Router>
    
    </>
   

  );
}

export default App;
