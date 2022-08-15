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

import Fab from '@mui/material/Fab';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
// import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import Paper from "@mui/material/Paper";





//footerMenu
const footerMenu = [
  { id: 1, text: 'Explore', icon: <FaSearch size={18} /> },
  { id: 2, text: 'Wishlist', icon: <FaRegHeart size={18} /> },
  { id: 3, text: 'Login', icon: <FaRegUserCircle size={18} /> },
];

//show&hide header


export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
const [anchorEl, setAnchorEl] = React.useState(null);

const handleClose = () => {

    // console.log("windowClicked")
    setAnchorEl(null);
    setIsOpen(false);
  
};
useEffect(() => {
  
  document.addEventListener("click", handleClose);
}, []);
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

          sx={{
            position: "sticky",
            top: "0",
            backgroundColor: "white",
            zIndex: 90,
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Header />
          <OptionsTab />
        </Box>

        {/* MobileSearch  */}
        <Container maxWidth="xl" sx={{ mb: 3,  }}>
          <Box

          sx={{
            position: "fixed",
            top: "0",
            zIndex: 90,
            my:2,
            display: { xs: 'block', md: 'none' }
          }}
        >
            <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        width: 400,
        border: '1px solid #ccc',
        borderRadius: 20,
      }}
    >
      <IconButton sx={{ p: '10px' }}>
        <FaSearch />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to?" />
      <IconButton type="submit" sx={{ p: '10px' }}>
        <VscSettings />
      </IconButton>
            </Paper>
          </Box>
          </Container>

            {/* <div className='container d-flex'> 
            <div className='row '> */}

              <MainCard />

              {/* <MainCard className='col-md-3  col-sm-1'/>
              <MainCard className='col-md-3 col-sm-1'/>
              <MainCard className='col-md-3 col-sm-1'/>
              <MainCard className='col-md-3 col-sm-1'/>
              <MainCard className='col-md-3  col-sm-1'/>
              <MainCard className='col-md-3 col-sm-1'/>
              <MainCard className='col-md-3 col-sm-1'/>
              <MainCard  className='col-md-3 col-sm-1'/>
              <MainCard className='col-md-3  col-sm-1'/>
              <MainCard className='col-md-3 col-sm-1'/>
              <MainCard className='col-md-3 col-sm-1'/> */}
              {/* </div>
            </div> */}

            
 
            <Box  sx={{   m: 1,  }}
            >
              <Link to={"/map"}>
            <Fab variant="extended" style={{backgroundColor:'#222222', color:'white', zIndex:50, position:'fixed', bottom:'20%', right:'48%'}}>
        <MapOutlinedIcon sx={{ mr: 1  }} />
        show map
      </Fab>  </Link>
              </Box>          
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
