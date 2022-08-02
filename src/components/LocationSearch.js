import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';

import Drawer from "@mui/material/Drawer";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';



// components
import Logo from './Logo';
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from '../themes/commonStyles';
import ProfileSettings from './ProfileSettings';

const choices = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Any week' },
  { id: 3, text: 'Add guest', withIcon: true },
];

const LocationSearch = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  

  return (
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
          return (
            <Button key={choice.id}  onClick={() => setIsDrawerOpen(true)}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: 'bold',
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box
                  sx={{
                    ml: 1,
                    mt: 1,
                    mr: 1,
                  }}
                >
                  <IoSearchCircleSharp color={pink[500]} size={32} />
                </Box>
              )}
            </Button>

            

          );
        })}
      </Stack>
      <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
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
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            {/* <LocationSearch /> */}

            <ButtonGroup variant="text" aria-label="text button group" >
        <Button style={{color:'black', fontSize:'16px'}} onClick={handleClick}  aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>Stays</Button>
        <Button style={{color:'black', fontSize:'16px'}}>Experiences</Button>
        <Button style={{color:'black', fontSize:'16px'}}>Online Experiences</Button>
      </ButtonGroup>
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          
        </Box>
      </Container>
    </Box>
    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
           Profile
        </MenuItem>
        <MenuItem>
           My account
        </MenuItem>
        <Divider />
        <MenuItem>
          
          Add another account
        </MenuItem>
        <MenuItem>
          
          Settings
        </MenuItem>
        <MenuItem>
          
          Logout
        </MenuItem>
      </Menu>
              </Drawer>
    </Paper>
  );
};

export default LocationSearch;
