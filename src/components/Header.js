import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// react icons
import { FaAirbnb } from 'react-icons/fa';
import { flexCenter } from '../themes/commonStyles';
import { pink } from '@mui/material/colors';

import { Link } from "react-router-dom";
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from '../themes/commonStyles';

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

// react icons
import { IoSearchCircleSharp } from "react-icons/io5";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


// react icons
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import { useTranslation } from "react-i18next";
import { LangIcone } from './lang/languages';



const Header = () => {
const { t } = useTranslation();
let where=t("anywhere");
let week=t("anyweek");
let addg=t("addguest");
const choices = [
  { id: 1, text: where, altText: "Stays" },
  { id: 2, text: week, altText: "Experiences" },
  { id: 3, text: addg, withIcon: true, altText: "Online Experiences" },
];
  // serch
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const handleClose = () => {
  
      console.log("windowClicked")
      setAnchorEl(null);
      setIsOpen(false);
    
  };
  useEffect(() => {
    
    document.addEventListener("click", handleClose);
  }, []);

  //profileSetting
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorE2);
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
        width: "100%",
      }}
      
    >
      <Container maxWidth="xl">
        <Box  
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
            {/* Logo  */}

          <Box sx={displayOnDesktop}>
            <Link to={'/'} style={{textDecoration:'none'}}
>
    <Box sx={flexCenter} >
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
       airbnb
      </Typography>
    </Box>
    </Link>
          </Box>
         
            {/* LocationSearch */}

          <Box sx={displayOnDesktop}  
          >

            <div
        style={{
          height: isOpen ? 50 : 0,
          transition: "0.25s",
          width: "1px",
        }}
      ></div>

      <Paper 
        sx={{
          borderRadius: 20,
          ml: 15,
        }}
        elevation={3}
      >
        <Stack
          sx={{
            borderRadius: 20,
            pl: 2,
          }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          {choices.map((choice) => {
            return ( <>
              <Button
                key={choice.id}
                style={{ paddingInline: isOpen ? 40 : 0, transition: "0.25s",  }}
                onClick={(e) => {
                  e.stopPropagation()
                 
                  setIsOpen(true);
                }}
               
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontWeight: "bold",
                  }}
                >
                  {isOpen ? choice.altText : choice.text}
                </Typography>
                {choice.withIcon && (
                  <Box
                  
                    sx={{
                      ml: 1,
                      mt: 1,
                      mr: 1,
                    }}
                  >
                    <IoSearchCircleSharp color={pink[500]} size={32} 
                   />
                  </Box>
                )}
              </Button>
              
           </> );
          })}
          
        </Stack>{" "}

        

      </Paper>

      <div
        style={{
          height: isOpen ? 50 : 0,
          transition: "0.25s",
          width: "0.5px",
        }}
      ></div>
          </Box>
          
           {/* ProfileSettings  */}

          <Box sx={displayOnDesktop}>

            <Box sx={flexCenter}>
      <Link to={"/host"}  style={{textDecoration:'none', color:'black', fontWeight:'bold', fontSize:'14px'}}>{t("BecomeAHost")}</Link>
    
      <Stack>
        {/* change lang */}
        <Button>
          <LangIcone/>
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: '1px solid #ddd',
          }}
          onClick={handleClick2}
          // size="small"
          // sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Stack>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
          </Stack>
        </Button>
        <Menu
        anchorEl={anchorE2}
        id="account-menu"
        open={open}
        onClose={handleClose2}
        onClick={handleClose2}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
        {t("singup")}
        </MenuItem>
        <MenuItem>
        {t("login")}
        </MenuItem>
        <Divider />
        <MenuItem>
        {t("hostyourhome")}
        </MenuItem>
        <MenuItem>
          
        {t("experience")}
        </MenuItem>
        <MenuItem>
          
        {t("help")}
        </MenuItem>
      </Menu>
      </Stack>
    </Box>
          </Box>
          
           {/* MobileSearch  */}

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
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

        </Box>
      </Container>
    </Box>
  );
};

export default Header;
