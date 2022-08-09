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

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaSearch, FaRegHeart, FaRegUserCircle } from 'react-icons/fa';

//footerMenu
const footerMenu = [
  { id: 1, text: 'Explore', icon: <FaSearch size={18} /> },
  { id: 2, text: 'Wishlist', icon: <FaRegHeart size={18} /> },
  { id: 3, text: 'Login', icon: <FaRegUserCircle size={18} /> },
];


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
          <Box
     style={{position: "sticky",top:'0' , backgroundColor:'white'}}
     >
          <Header />
          <OptionsTab />
        </Box>

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
          {/* <FooterMenu /> */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 , }}
    >
      <Stack>
        {footerMenu.map((item) => {
          return (
            <Button key={item.id}>
              <Stack
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                direction="column"
                spacing={1}
              >
                {item.icon}
                <Typography> {item.text}</Typography>
              </Stack>
            </Button>
          );
        })}
      </Stack>
    </Box>
        </Box>
        <Box sx={displayOnDesktop} >
          <Footer  />
        </Box>
      </Box>
    </React.Fragment>
    
  )
}
