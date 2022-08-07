import React from "react";
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


function App() {
  return (
    <>
    <BecomeAHost></BecomeAHost>
{/* 
    <Router>
    
        <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/host" exact element={<BecomeAHost/>} />
        <Route path="/details" exact element={<HostingDetails/>} />


       


        </Routes>
    </Router>
    */}
    </>
   

    // 
  );
}

export default App;
