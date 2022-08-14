import React,{ useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaAirbnb } from 'react-icons/fa';
import { flexCenter } from '../themes/commonStyles';
import { pink } from '@mui/material/colors';
import { Link,useNavigate } from "react-router-dom";
import { flexBetweenCenter , dFlex , displayOnDesktop} from '../themes/commonStyles';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { IoSearchCircleSharp } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import { useTranslation } from "react-i18next";
import { LangIcone } from './lang/languages';
import Nav from "react-bootstrap/Nav";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Popover from "@mui/material/Popover";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import TextField from '@mui/material/TextField';
// + & -
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector } from 'react-redux';




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

  //search details
    //popover
    const [anchorWho, setAnchorWho] = React.useState(null);

    const handleClickWho = (event) => {
      setAnchorWho(event.currentTarget);
    };
  
    const handleCloseWho = () => {
      setAnchorWho(null);
    };
  
    const openWho = Boolean(anchorWho);
    const idWho = openWho ? "simple-popover" : undefined;
  
    //mostafa
    // + & - 1
    const [count1, setCount1] = useState(0);
    const IncNum1 = () => {
      setCount1(count1 + 1);
    };
    const DecNum1 = () => {
      if (count1 > 0) setCount1(count1 - 1);
      else {
        setCount1(0);
        alert("min limit reached");
      }
    };
    // + & - 2
    const [count2, setCount2] = useState(0);
    const IncNum2 = () => {
      setCount2(count2 + 1);
    };
    const DecNum2 = () => {
      if (count2 > 0) setCount2(count2 - 1);
      else {
        setCount2(0);
        alert("min limit reached");
      }
    };
    // + & - 3
    const [count3, setCount3] = useState(0);
    const IncNum3 = () => {
      setCount3(count3 + 1);
    };
    const DecNum3 = () => {
      if (count3 > 0) setCount3(count3 - 1);
      else {
        setCount3(0);
        alert("min limit reached");
      }
    };
    // + & - 4
    const [count4, setCount4] = useState(0);
    const IncNum4 = () => {
      setCount4(count4 + 1);
    };
    const DecNum4 = () => {
      if (count4 > 0) setCount4(count4 - 1);
      else {
        setCount4(0);
        alert("min limit reached");
      }
    };
    
    //popover where
    const [anchorWhere, setAnchorWhere] = React.useState(null);
  
    const handleClickWhere = (event) => {
      setAnchorWhere(event.currentTarget);
    };
  
    const handleCloseWhere = () => {
      setAnchorWhere(null);
    };
  
    const openWhere = Boolean(anchorWhere);
    const idWhere = openWhere ? 'simple-popover' : undefined;
  
    //date picker
    const [value, setValue] = React.useState([null, null]);
  
    //popover check in
    const [anchorCheckIn, setAnchorCheckIn] = React.useState(null);
  
    const handleClickCheckIn = (event) => {
      setAnchorCheckIn(event.currentTarget);
    };
  
    const handleCloseCheckIn = () => {
      setAnchorCheckIn(null);
    };
  
    const openCheckIn = Boolean(anchorCheckIn);
    const idCheckIn = openCheckIn ? 'simple-popover' : undefined;

    //////
  const sing = useSelector((state)=>state.userData.info)
  const isEmpety = Object.keys(sing).length ===0

  const navigate = useNavigate()
  const profile =()=>{
    navigate('/user')

  }
  const log =()=>{
    navigate('/logIn')
  }
  const signUp =()=>{
    navigate('/signUp')
  }
  
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

          <Box 
             style={{ display: isOpen ? 'none' :  'block'  }}
           >

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
                // style={{ paddingInline: isOpen ? 40 : 0, transition: "0.25s", }}
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
                  {/* {isOpen ? choice.altText : choice.text} */}
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
                    <IoSearchCircleSharp color={pink[500]} size={32} 
                   />
                  </Box>
                )}
              </Button>
              
           </> );
          })}
          
        </Stack>{" "}

        

      </Paper>

    
          </Box>
          
          {/* Navs */}
          <Box  style={{ display: isOpen ? 'flex': 'none' }}>
            
              <Nav >
                <Nav.Item>
                  <Nav.Link className="fw-bold p-3">Stays</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="fw-bold p-3">Experiences</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="fw-bold p-3">Online experiences</Nav.Link>
                </Nav.Item>
              </Nav>
            
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
        {(isEmpety)?<Box><MenuItem onClick={signUp}>
        {t("singup")}
        </MenuItem>
        <MenuItem onClick={log}>
        {t("login")}
        </MenuItem></Box>
        :<MenuItem onClick={profile}>
        {t("Profile")}
        </MenuItem>}
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
        
        </Box>

        {/* navbar */}
      <Box sx={displayOnDesktop} style={{ display: isOpen ? 'flex': 'none'}}>

<Paper 
  sx={{
    borderRadius: 20,   
    ml: 23,
    mb:4,

  }}
  elevation={3}
  onClick={(e) => {
    e.stopPropagation()
   
    setIsOpen(true);
  }}
>
  <Stack
    sx={{
      borderRadius: 20,
      pl: 2,
      height:60,
    }}
    divider={<Divider orientation="vertical" flexItem />}
  >
    <Button style={{fontWeight:'bold', width:'250px'}}onClick={handleClickWhere} >Where</Button>
    <Button style={{fontWeight:'bold', }} onClick={handleClickCheckIn}>Check In</Button>
    <Button style={{fontWeight:'bold', }} onClick={handleClickCheckIn}>Check Out</Button>
    <Button style={{fontWeight:'bold', width:'150px'}} onClick={handleClickWho} >Who 
      <Button variant="contained" color='secondary' onClick={handleClickWho}
     style={{borderRadius:20, marginInline:'10px', padding:'10px',fontWeight:'bold' }} endIcon={< SearchOutlinedIcon /> }>
       search
      </Button></Button>


    
    
  </Stack>{" "}

  

</Paper>

{/* who details */}
<Popover
            id={idWho}
            open={openWho}
            anchorEl={anchorWho}
            onClose={handleCloseWho}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <Grid container>
                <Grid item xs={7} s>
                  <Box>
                    <h4>Adults</h4>
                    <p>Age 13+</p>
                    <h4>Children</h4>
                    <p>Age 2-12</p>
                    <h4>Infants</h4>
                    <p>Under 2</p>
                    <h4>Pets</h4>
                    <p
                      style={{ textDecoration: "underLine", fontSize: "15px" }}
                    >
                      Bringing a service animal?
                    </p>
                  </Box>
                </Grid>
                <Grid item xs={5} s>
                  <Box p={2}>
                    <Grid container style={{ marginBottom: "50px" }}>
                      <Grid item xs={5} s>
                        <Box>
                          <Button onClick={IncNum1}>
                            <AddIcon size="small" />
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={2} s>
                        <Box style={{ position: "relative" }} p={2}>
                          <p
                            style={{
                              position: "absolute",
                              right: "10%",
                              top: "-20%",
                            }}
                          >
                            {count1}
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={5} s>
                        <Box>
                          <Button onClick={DecNum1}>
                            <RemoveIcon size="small" />
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>

                    <Grid container style={{ marginBottom: "50px" }}>
                      <Grid item xs={5} s>
                        <Box>
                          <Button onClick={IncNum2}>
                            <AddIcon size="small" />
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={2} s>
                        <Box style={{ position: "relative" }} p={2}>
                          <p
                            style={{
                              position: "absolute",
                              right: "10%",
                              top: "-20%",
                            }}
                          >
                            {count2}
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={5} s>
                        <Box>
                          <Button onClick={DecNum2}>
                            <RemoveIcon size="small" />
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>

                    <Grid container style={{ marginBottom: "50px" }}>
                      <Grid item xs={5} s>
                        <Box>
                          <Button onClick={IncNum3}>
                            <AddIcon size="small" />
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={2} s>
                        <Box style={{ position: "relative" }} p={2}>
                          <p
                            style={{
                              position: "absolute",
                              right: "10%",
                              top: "-20%",
                            }}
                          >
                            {count3}
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={5} s>
                        <Box>
                          <Button onClick={DecNum3}>
                            <RemoveIcon size="small" />
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={5} s>
                        <Box>
                          <Button onClick={IncNum4}>
                            <AddIcon size="small" />
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={2} s>
                        <Box style={{ position: "relative" }} p={2}>
                          <p
                            style={{
                              position: "absolute",
                              right: "10%",
                              top: "-20%",
                            }}
                          >
                            {count4}
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={5} s>
                        <Box>
                          <Button onClick={DecNum4}>
                            <RemoveIcon size="small" />
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </Popover>

          {/* where details */}
          <Popover
        id={idWhere}
        open={openWhere}
        anchorEl={anchorWhere}
        onClose={handleCloseWhere}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="round p-5" style={{width:'480px'}}>
            <h4 >Search by region</h4>
            <div className="container d-flex ">
                <div className='row'>
                    <div className='col-4 p-1'> 
                    <img className=' border border-dark rounded' width="122px" height="122px" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"></img>
                    <h6 className="py-2">I'm flexible</h6>
                    </div>
                    <div className='col-4 p-1'> 
                    <img className=' border border-dark rounded' width="122px" height="122px" src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"></img>
                    <h6 className="py-2">Europe</h6>
                    </div>
                    <div className='col-4 p-1'> 
                    <img className=' border border-dark rounded' width="122px" height="122px" src="https://a0.muscache.com/im/pictures/97d76097-22b3-4d87-9459-ad1b90b18d2f.jpg?im_w=320"></img>
                    <h6 className="py-2">Turkey</h6>
                    </div>
                    <div className='col-4 p-1'> 
                    <img className=' border border-dark rounded' width="122px" height="122px" src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"></img>
                    <h6 className="py-2">United States</h6>
                    </div>
                    <div className='col-4 p-1'> 
                    <img className=' border border-dark rounded' width="122px" height="122px" src="https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320"></img>
                    <h6 className="py-2">Italy</h6>
                    </div>
                    <div className='col-4 p-1'> 
                    <img className=' border border-dark rounded' width="122px" height="122px" src="https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320"></img>
                    <h6 className="py-2">Africa</h6>
                    </div>
                    

                </div>
            </div>

        </div>
      </Popover>

      {/* check in details */}
      <Popover id={idCheckIn}
        open={openCheckIn}
        anchorEl={anchorCheckIn}
        onClose={handleCloseCheckIn}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'}}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>

      </Popover>


    </Box>
      </Container>
    </Box>
  );
};

export default Header;
