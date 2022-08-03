import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { displayOnDesktop } from "./themes/commonStyles";
import MainCard from "./components/card";

import HeaderDet from "./components/header/headerdet";
import Home from "./components/home/home";
import UnderHome from "./components/underHome/underHome";
import UpperFooter from "./components/UperFooter/UperFooter";
import FooterDet from "./components/footer/Footerdet";
import LastFooter from "./components/lastFooter/lastFooter";

import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";


function App() {
  return (
   


    <React.Fragment>
      <CssBaseline />
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box style={{position: "sticky",top:'0' , backgroundColor:'white'}}>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3,  }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
            </Stack>

            
          </Container>
        </Box>
        
        <Box >
          <Footer sx={displayOnDesktop} />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
