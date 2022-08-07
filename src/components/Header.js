import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Logo from './Logo';
import LocationSearch from './LocationSearch';
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from '../themes/commonStyles';
import ProfileSettings from './ProfileSettings';
import MobileSearch from './MobileSearch';
import SearchDetails from './SearchDetails';

const Header = () => {

  

  return (
    <Box
      sx={{
        // display: 'flex',
        // flexDirection: 'row',
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
        width: "100%",
      }}
      // style={{position: "fixed", top: 0 , backgroundColor:'white'}}
      
    >
      <Container maxWidth="xl">
        <Box  
          sx={{
            // display: 'flex',
            // justifyContent: { xs: 'center', md: 'space-between' },
            // alignItems: 'center',
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
         
          <Box sx={displayOnDesktop}  
          >
            <LocationSearch />
            {/* <SearchDetails/> */}
          </Box>
          
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileSearch />
          </Box> 

        </Box>
      </Container>
    </Box>
  );
};

export default Header;
