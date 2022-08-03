import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';


// react icons
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from '../themes/commonStyles';

const ProfileSettings = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box sx={flexCenter}>
      <Link href="/host"> Become A Host</Link>
      <Stack>
        <Button>
          <BsGlobe size={24} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: '1px solid #ddd',
          }}
          onClick={handleClick}
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
         Sign up
        </MenuItem>
        <MenuItem>
           Log in
        </MenuItem>
        <Divider />
        <MenuItem>
          
          Host your home
        </MenuItem>
        <MenuItem>
          
          Host an experience
        </MenuItem>
        <MenuItem>
          
          Help
        </MenuItem>
      </Menu>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
