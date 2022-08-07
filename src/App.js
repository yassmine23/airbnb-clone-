import React from "react";

import "./App.css";
import Box from "@mui/material/Box";

import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";

import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import HostingDetails from './pages/HostingDetails';
import BecomeAHost from './pages/BecomeAHost';


function App() {
  return (
    <>
    <Router>
     
    <Box
     style={{position: "sticky",top:'0' , backgroundColor:'white', zIndex:20}}
     >
          <Header />
          {/* <OptionsTab /> */}
        </Box>

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
