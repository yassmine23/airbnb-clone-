import React from 'react';
import MainCard from "../components/card";
import Header from "../components/Header";
import OptionsTab from "../components/OptionsTab";
import Footer from "../components/Footer";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { displayOnDesktop } from "../themes/commonStyles";
import FooterMenu from '../components/FooterMenu';


export default function HomePage() {
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
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}
             >
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop} >
          <Footer  />
        </Box>
      </Box>
    </React.Fragment>
    
  )
}
