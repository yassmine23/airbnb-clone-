import React from 'react';
import Box from '@mui/material/Box';
 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GppGoodIcon from '@mui/icons-material/GppGood';
 import EventBusyIcon from '@mui/icons-material/EventBusy';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import BlenderOutlinedIcon from '@mui/icons-material/BlenderOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import StarIcon from '@mui/icons-material/Star';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {alpha,makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector } from 'react-redux';

//check availbility
 const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
  }));
  
  function RedditTextField(props) {
    const classes = useStylesReddit(); 
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
// the begning of function
const UnderHome = () => {
      //date and pickers
      const [startDate, setStartDate]=useState(new Date());
      const [endDate, setEndDate]=useState(new Date());

      function handelSelect(ranges){    
          var x1=  setStartDate(ranges.selection.startDate);
          var x2= setEndDate(ranges.selection.endDate);
          document.getElementById('fixedP').innerText= ''
          document.getElementById('selecteddates').innerText=`start date: ${ranges.selection.startDate.toDateString()} end date: ${ranges.selection.endDate.toDateString()}`
          document.getElementById('reddit-input1').value=`${ranges.selection.startDate.toDateString()}`
          document.getElementById('reddit-input2').value=`${ranges.selection.endDate.toDateString()}`
          var date1 = new Date(ranges.selection.startDate);
          var date2 = new Date(ranges.selection.endDate);
          // To calculate the time difference of two dates
          var Difference_In_Time = date2.getTime() - date1.getTime();
          // To calculate the no. of days between two dates
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          //console.log(Difference_In_Days)
          document.getElementById('NightsNo').innerText=`$${dataDetails.price} x ${Difference_In_Days} nights`
          document.getElementById('ServiceFee').innerText=`Service Fee`
          document.getElementById('NightsPrice').innerText=`$${eval(dataDetails.price*Difference_In_Days)}`
          let y=parseInt(eval(dataDetails.price*Difference_In_Days));
          document.getElementById('FeePrice').innerText=`$${eval(0.14*y).toFixed(0)}`
          let z=parseInt(eval(0.14*y).toFixed(0));
          document.getElementById('totalPrice').innerText=`Total before taxes`
          let x=(y+z) 
          document.getElementById('actualPrice').innerText=`$${x}`;
        };
        
        const SelectionRange={
            startDate: startDate,
            endDate: endDate,
            key:'selection',
        }

        const clear= () => {
            setStartDate('');
            setEndDate('');
            document.getElementById('selecteddates').innerText=''
            document.getElementById('fixedP').innerText= 'Add your travel dates for exact pricing'
            document.getElementById('reddit-input1').value= "add date"
            document.getElementById('reddit-input2').value= "add date"
            document.getElementById('NightsNo').innerText=''
            document.getElementById('ServiceFee').innerText=''
            document.getElementById('NightsPrice').innerText=''
            document.getElementById('FeePrice').innerText=''
            document.getElementById('totalPrice').innerText=''
            document.getElementById('actualPrice').innerText=''
        }
        //increment and decrement

        // 1
        const [count1, setCount1] = useState(0);
        const IncNum1 = () => {
            setCount1(count1 + 1);
        };
        const DecNum1 = () => {
            if (count1 > 0) {
            setCount1(count1 - 1);
            }else {
            setCount1(0);
            alert("min limit reached");
            }
        };
        //  2
        const [count2, setCount2] = useState(0);
        const IncNum2 = () => {
            setCount2(count2 + 1); 
        };
        const DecNum2 = () => {
            if (count2 > 0){ 
                setCount2(count2 - 1);
                document.getElementById('GuestsNo').innerText= `${count2} Adults`
            }else {
            setCount2(0);
            alert("min limit reached");
            }
        };
        //3
        const [count3, setCount3] = useState(0);
        const IncNum3 = () => {
            setCount3(count3 + 1);
        };
        const DecNum3 = () => {
            if (count3 > 0){ 
                setCount3(count3 - 1);
            }else {
            setCount3(0);
            alert("min limit reached");
            }
        };
        // 4
        const [count4, setCount4] = useState(0);
        const IncNum4 = () => {
            setCount4(count4 + 1);
        };
        const DecNum4 = () => {
            if (count4 > 0){
                setCount4(count4 - 1);
            }else {
            setCount4(0);
            alert("min limit reached");
            }
        };

        //to show selected guests
        const addGuests =(ev)=>{
            if(count1 !==0 || count2 !==0 || count3 !==0 || count4 !==0){
            document.getElementById('GuestsNo').innerText= `${count1} Adults, ${count2} children, ${count3} Infants, ${count4} pets `
            }  
        }
        //check availability
        const classes = useStyles();
        //calender
        const [value , setValue] = React.useState([null, null]);
/////////////////////////////////
        const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
            height: 5,
            borderRadius: 5,
            [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            },
            [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: theme.palette.mode === 'light' ? 'black' : '#308fe8',
            },
        }));
        //data from database
        var dataDetails = useSelector((state)=>state.requestDetail.details);

     return <>
       
        <Grid container my={4}>
                 {/* left side */}
            <Grid item xs={7}>
                            <Box  style={{position: 'relative',borderBottom:'1px solid lightgray'}} p={2}>
                                <h2>Lighthouse hosted by Neven</h2>
                                <p>8 guests . 1 bedroom . 1 bed . 1 bath</p>
                            <Avatar style={{position: 'absolute',top: 50, right: '2%'}}  src="https://a0.muscache.com/im/pictures/user/d4a7051c-d7e9-46cc-bcbc-6389a7a4509b.jpg?im_w=240"/>
                            </Box>
                            <Box  style={{ borderBottom:'1px solid lightgray'}} p={2}>
                                <ApartmentIcon/> <span style={{fontWeight:'bold', fontSize: 22}}>Dedicated workspace</span>
                                <p>A common area with wifi that's well-suited for working.</p>
                                <GppGoodIcon/> <span style={{fontWeight:'bold', fontSize: 22}}>Self check-in </span>
                                <p>Check yourself in with the lockbox.</p>
                                <EventBusyIcon/> <span style={{fontWeight:'bold', fontSize: 22}}>Free cancellation befire Aug 7.</span>
                            </Box>
                            <Box style={{ borderBottom:'1px solid lightgray'}} p={2}>
                                <img  width='150wv' height='40hv'  alt='ss' src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'/>
                                <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                                <Link style={{color:'black',textDecoration:'underLine',fontWeight:'bold'}} href="#">Learn more</Link>
                            </Box>
                            <Box style={{ borderBottom:'1px solid lightgray'}} p={2}>
                                <p>Head north in Norway and experience our tiny-hotel on a remote island. The Arctic Hideaway is an architecturally playful and stunning collection of 11 individual buildings, where fours are sleeping cabins. The shared areas are the iconic Tower House, kitchen house, studio building, bathhouse, crab trap and sauna. In limited periods, we will offer single cabins for rent on Airbnb. Included in the stay is all food (se details for concept) and daily use of the sauna...</p>
                                <Link style={{color:'black',textDecoration:'underLine',fontWeight:'bold'}} href="#">Show more</Link>
                            </Box>
                            <Box   style={{ borderBottom:'1px solid lightgray'}} p={2}>
                                <h2>Where you'll sleep</h2>
                                {/* <p style={{borderRadius:'80px'}} > */}
                                <img alt='dd'   width='280wv' height='200hv' src='https://a0.muscache.com/im/pictures/2b39e799-e7c4-4d23-bdea-d63c457f76e3.jpg?im_w=720'/>
                                {/* </p> */}
                                <p><h3>Bedroom</h3>
                                <p>1 queen bed</p> </p>
                            </Box>
                            <Box   style={{ borderBottom:'1px solid lightgray'}} p={2}>
                            <h2>What this place offers</h2>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Box  p={2}> 
                                        <p><BeachAccessIcon/> <span style={{fontSize: 20}}>Beach access-Beachfront</span></p>
                                        <p><WifiOutlinedIcon/> <span style={{fontSize: 20}}>Wifi</span></p>
                                        <p><BathtubOutlinedIcon/> <span style={{fontSize: 20}}>Free parking om premises</span></p>
                                        <p><PetsOutlinedIcon/> <span style={{fontSize: 20}}>Pets allowed</span></p>
                                        <p><LocalLaundryServiceOutlinedIcon/> <span style={{fontSize: 20}}>Dryer</span></p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box p={2}>
                                        <p><BlenderOutlinedIcon/> <span style={{fontSize: 20}}>Kitchen</span></p>
                                        <p><WorkspacePremiumOutlinedIcon/> <span style={{fontSize: 20}}>Dedicated workspace</span></p>
                                        <p><DirectionsCarFilledOutlinedIcon/> <span style={{fontSize: 20}}>shared hot tub</span></p>
                                        <p><GppGoodIcon/> <span style={{fontSize: 20}}>Washer</span></p>
                                        <p><BlockOutlinedIcon/> <span style={{fontSize: 20, textDecoration: 'line-through'}}>Carbon momoxide alarm</span></p>
                                        </Box>
                                    </Grid>
                                        <p style={{fontWeight:'bold', fontSize: 15, border:'1px solid black', padding:10, borderRadius:10, marginLeft:20}}>Show all 38 amentities</p>
                                </Grid>
                             </Box>
                            <Box p={2}>
                                <h3>5 nights in Gildeskal</h3>
                                <p>Sep 20, 2020 - Sep 25, 2022</p>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <StaticDateRangePicker
                                        style={{position:'relative'}}
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
                                    <Button onClick={()=>clear()} style={{position:'absolute', left:'45%', color:'black', textDecoration:'underLine', }}>CLEAR DATES</Button>
                                </LocalizationProvider>
                            </Box>
             </Grid>

  {/* Right side */}
    <Grid item xs={5} style={{position:'relative', marginTop:'50px'}}>
        <Box style={{height:'100hv' , boxShadow:'0px 1px 26px -6px rgba(0,0,0,0.59)',position:'sticky',top:'20px',bottom:'599px', marginLeft:'50px',  width:'50wv',borderRadius:'20px', border:'1px solid lightgray'}}   p={2}> 
                <Grid container>
                        <Grid item xs={6}>
                            <Box  p={2}> 
                             <p><span style={{fontWeight:'bold', fontSize: 22}}>{dataDetails.price}</span>night</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box p={2}>
                            <p><StarIcon/>4.86.<span style={{textDecoration:'underLine'}}>14reviews</span></p>
                            </Box>
                        </Grid>
                </Grid> 
                <Grid container style={{border:'1px solid lightgray', borderRadius:'20px'}}>
                <Grid container>
                        <Grid item xs={6} s>
                            <Box style={{borderBottom:'1px solid lightgray' }}  p={2}> 
                                <form className={classes.root} noValidate>
                                        <RedditTextField
                                            label="CHECK-IN"
                                            className={classes.margin}
                                            defaultValue="Add date"
                                            variant="filled"
                                            id="reddit-input1"
                                        />
                                </form>
                            </Box>
                            <Box p={2}> 
                                <p style={{fontWeight:'bold', fontSize: 12}}>GUESTS</p>
                                <p style={{ fontSize: 15}} id='GuestsNo'></p>
                            </Box>
                       </Grid>
                       <Grid item xs={6}>
                            <Box p={2} style={{borderBottom:'1px solid lightgray', borderLeft:'1px solid lightgray' }}>
                                <form className={classes.root} noValidate>
                                        <RedditTextField
                                            label="CHECKOUT"
                                            className={classes.margin}
                                            defaultValue="Add date"
                                            variant="filled"
                                            id="reddit-input2"
                                        />
                                </form>
                            </Box>
                            <Box p={2} style={{position:'relative'}}>
                                <PopupState variant="popover" popupId="demo-popup-popover" style={{position:'relative'}}>
                                {(popupState) =>(
                                    <div style={{position:'absolute', top:'44%',right:'7%', color:'black'}}>
                                    <Button variant="contained" {...bindTrigger(popupState)}>
                                        <ExpandMoreIcon />
                                    </Button>
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                        
                                        }}
                                    >
                                    <Typography sx={{ p: 2 }}  > 
                                      <Grid container>
                                           <Grid item xs={7} s>
                                                <Box > 
                                                    <h4>Adults</h4>
                                                    <p>Age 13+</p>
                                                    <h4>Children</h4>
                                                    <p>Age 2-12</p>
                                                    <h4>Infants</h4>
                                                    <p>Under 2</p>
                                                    <h4>Pets</h4>
                                                    <p style={{textDecoration:'underLine', fontSize:'15px'}}>Bringing a service animal?</p>
                                                </Box>
                                           </Grid>
                                           <Grid item xs={5} s>
                                            <Box p={2}> 
                                               <Grid container style={{marginBottom:'50px'}}>
                                                   <Grid item xs={5} s>
                                                      <Box> 
                                                            <Button  onClick={IncNum1}>
                                                                <AddIcon size="small" />
                                                            </Button>
                                                       </Box>
                                                   </Grid>
                                                    <Grid item xs={2} s>
                                                        <Box style={{position:'relative'}} p={2}> 
                                                        <p style={{position:'absolute',right:'10%', top:'-20%'}}>{count1}</p>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={5} s>
                                                        <Box> 
                                                            <Button   onClick={DecNum1}>
                                                              <RemoveIcon size="small"/>
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                               </Grid>
                                               <Grid container style={{marginBottom:'50px'}}>
                                                    <Grid item xs={5} s>
                                                        <Box> 
                                                            <Button  onClick={IncNum2}>
                                                                <AddIcon size="small" />
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={2} s>
                                                        <Box style={{position:'relative'}} p={2}> 
                                                            <p style={{position:'absolute',right:'10%', top:'-20%'}}>{count2}</p>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={5} s>
                                                        <Box> 
                                                            <Button   onClick={DecNum2}>
                                                               <RemoveIcon size="small"/>
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                              </Grid>

                                            <Grid container style={{marginBottom:'50px'}}>
                                                <Grid item xs={5} s>
                                                    <Box  > 
                                                        <Button  onClick={IncNum3}>
                                                            <AddIcon size="small" />
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={2} s>
                                                    <Box style={{position:'relative'}} p={2}> 
                                                      <p style={{position:'absolute',right:'10%', top:'-20%'}}>{count3}</p>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={5} s>
                                                    <Box  > 
                                                        <Button   onClick={DecNum3}>
                                                           <RemoveIcon size="small"/>
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                            </Grid>


                                            <Grid container>
                                                <Grid item xs={5} s>
                                                    <Box  > 
                                                        <Button  onClick={IncNum4}>
                                                            <AddIcon size="small" />
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={2} s>
                                                    <Box style={{position:'relative'}} p={2}> 
                                                      <p style={{position:'absolute',right:'10%', top:'-20%'}}>{count4}</p>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={5} s>
                                                    <Box  > 
                                                        <Button   onClick={DecNum4}>
                                                          <RemoveIcon size="small"/>
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                                </Grid>
                                        </Box>
                                    </Grid>
                            </Grid>           
                        <button type='Submit' value='Submit' style={{color:'white', backgroundColor:'blue',borderRadius:'10px',position:'absolute', right:'7%'}} onClick={addGuests(Event)}>ok</button>
                    </Typography>                          
                    </Popover>                       
                </div>
            )}
            </PopupState>
            </Box>
         </Grid>
      </Grid> 
    </Grid> 
                   <Box> 
                        <PopupState 
                          variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div>
                                    <Button style={{borderRadius:'5px',marginLeft:'25px' ,marginTop:'15px',fontSize:'20px', paddingLeft:'75px', paddingRight:'75px',textAlign:'center', backgroundColor:'red', color:'white'}} variant="contained" {...bindTrigger(popupState)}>
                                        Check Availability
                                    </Button>
                                    <Popover
                                            {...bindPopover(popupState)}
                                            anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                            }} 
                                            > 
                                            <Typography sx={{ p: 2 }}>
                                                <Grid container>
                                                        <Grid item xs={5} s>
                                                            <Box p={2}> 
                                                            <h3>Select dates</h3>
                                                            <p id='selecteddates'></p>
                                                            <p id='fixedP'>Add your travel dates for exact pricing</p>
                                                            </Box>  
                                                        </Grid>
                                                </Grid>    
                                                        <div>
                                                            <DateRangePicker
                                                            ranges={[SelectionRange]}
                                                            onChange={handelSelect}
                                                            />
                                                    </div>
                                                <Button onClick={clear} style={{position:'absolute', right:'30px', color:'black', textDecoration:'underLine', }}>CLEAR DATES</Button>
                        
                                            </Typography>
                                    </Popover>
                                </div>
                            )}
                        </PopupState>

            {/* under check availability */}
                        <Grid container style={{borderBottom:'1px solid lightgray'}}>
                                <Grid item xs={9} s>
                                    <Box p={2}> 
                                        <p id='NightsNo'> </p>
                                        <p id='ServiceFee'> </p>
                                    </Box>  
                                </Grid>
                            <Grid item xs={3} s>
                                <Box p={2}> 
                                    <p id='NightsPrice'> </p>
                                    <p id='FeePrice'> </p>
                                </Box>  
                            </Grid>
                      </Grid>

                    <Grid container >
                            <Grid item xs={9} s>
                                <Box p={2}> 
                                <p id='totalPrice' style={{fontWeight:'bold', fontSize:'20px'}}></p>
                                </Box>  
                            </Grid>
                            <Grid item xs={3} s>
                                <Box p={2}> 
                                <p id='actualPrice' style={{fontWeight:'bold', fontSize:'20px'}}> </p>
                                </Box>  
                            </Grid>
                    </Grid>
                    <Button style={{borderRadius:'5px',marginLeft:'95px' ,marginTop:'15px',fontSize:'20px', paddingLeft:'75px', paddingRight:'75px',textAlign:'center', backgroundColor:'gray', color:'white'}} >
                                    Reserve  
                    </Button>
                </Box> 
            </Box>
        </Grid>             
    </Grid>

   <Grid container style={{ borderBottom:'1px solid lightgray',borderTop:'1px solid lightgray'}}>
        <Grid item xs={6}>
            <Box  p={2}> 
                <StarIcon/> <span style={{fontWeight:'bold', fontSize: 22}}> 4.85 . 13 reviews </span>
                    <Grid container>
                        <Grid item xs={6}>
                            <Box  p={2}> 
                            <p>Clearness</p>
                            <p>Communication</p>
                            <p>Check-in</p>
                            </Box>
                        </Grid>
                        <Grid item xs={5}>
                            <Box p={2}>
                            <BorderLinearProgress style={{marginTop:'30px'}} variant="determinate" value={80}/> 
                            <BorderLinearProgress style={{marginTop:'30px'}} variant="determinate" value={85}/> 
                            <BorderLinearProgress style={{marginTop:'30px'}} variant="determinate" value={90}/>  
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Box p={2}>
                            <p>4.5</p>
                            <p>4.7</p>
                            <p>4.9</p>
                            </Box>
                        </Grid>
                 </Grid> 
             </Box>
        </Grid>
              <Grid item xs={6}>
                <Box p={2}>
                   <Grid container>
                        <Grid item xs={6}>
                            <Box style={{marginTop:'27px'}} p={2}> 
                                <p>Accuracy</p>
                                <p>Location</p>
                                <p>Value</p>
                            </Box>
                        </Grid>
                        <Grid item xs={5}>
                            <Box p={2} style={{marginTop:'27px'}}>
                                <BorderLinearProgress style={{marginTop:'30px'}} variant="determinate" value={90}/> 
                                <BorderLinearProgress style={{marginTop:'30px'}} variant="determinate" value={95}/> 
                                <BorderLinearProgress style={{marginTop:'30px'}} variant="determinate" value={75}/>  
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Box p={2} style={{marginTop:'27px'}}>
                            <p>4.8</p>
                            <p>4.9</p>
                            <p>4.3</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

              <Grid container>
                 <Grid item xs={6}>
                     <Box  p={2}> 
                        <Grid container>
                            <Grid item xs={1}>
                                <Box  p={2}> 
                                   <Avatar alt='ff' style={{marginTop:'20px'}}  src='https://a0.muscache.com/im/pictures/user/a5942301-fc09-4e3e-b6bb-ce9de9d593f9.jpg?im_w=240'/>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box p={2}>
                                    <h4>John</h4>
                                    <p>July 2022</p>
                                </Box>
                            </Grid>
                            </Grid>
                                <p style={{marginBottom:'50px'}}>Amazing experience at the Arctic Hideaway. An opportunity to relax, meet great people and reflect and renew oneself, 
                                    while being connected to a wonderful landscape and nature.</p> 
                            <Grid container>
                                <Grid item xs={1}>
                                    <Box p={2}> 
                                       <Avatar alt='ff' style={{marginTop:'20px'}}  src='https://a0.muscache.com/im/pictures/user/2f8d6959-5f20-4d27-849c-3875be83caf9.jpg?im_w=240'/>
                                    </Box>
                                </Grid>
                            <Grid item xs={3}>
                                <Box    p={2}>
                                    <h4>Morten</h4>
                                    <p>July 2021</p>
                                </Box>
                            </Grid>
                            </Grid>
                                <p style={{marginBottom:'50px'}}>Very nice experience, had some mixed wheather but that can’t be helped</p> 
                                <Grid container>
                                   <Grid item xs={1}>
                                        <Box  p={2}> 
                                            <Avatar alt='ff' style={{marginTop:'20px'}}  src='https://a0.muscache.com/im/pictures/user/a51de333-9ec9-48c0-b494-cbcf8aaa394c.jpg?im_w=240'/>
                                        </Box>
                                    </Grid>
                            <Grid item xs={3}>
                                    <Box    p={2}>
                                        <h4>Mario</h4>
                                        <p>March 2022</p>
                                    </Box>
                            </Grid>
                        </Grid>
                                <p style={{marginBottom:'50px'}}>This is a good place to get a break from the world. We were so lucky to have both beautiful sunsets and amazing northern lights. Location 10/10. Cool concept. Great potential. Pay</p> 
                    </Box>
                </Grid>
            <Grid item xs={6}>
                <Box p={2}>
                    <Grid container>
                            <Grid item xs={1}>
                                <Box  p={2}> 
                                <Avatar alt='ff' style={{marginTop:'20px'}}  src='https://a0.muscache.com/im/pictures/user/720b466c-75e8-460a-a896-c3641a91cc59.jpg?im_w=240'/>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box    p={2}>
                                <h4>Marcorio</h4>
                                <p>Jan 2022</p>
                                </Box>
                            </Grid>
                     </Grid>
                         <p style={{marginBottom:'50px'}}>Be ready for a magical experience in a very unique place that you will remember forever.
                            This place will give you a sense of peace and calmness that.</p> 
                                <Grid container>
                                    <Grid item xs={1}>
                                        <Box  p={2}> 
                                        <Avatar alt='ff' style={{marginTop:'20px'}}  src='https://a0.muscache.com/im/pictures/user/d4a7051c-d7e9-46cc-bcbc-6389a7a4509b.jpg?im_w=240'/>

                                        </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Box    p={2}>
                                            <h4>Mark</h4>
                                            <p>Agu 2021</p>
                                        </Box>
                                    </Grid>                            
                               </Grid>
                                <p style={{marginBottom:'50px'}}>I came across the Arctic Hideaway when searching for a unique place to stay 
                                after a 10 day hiking tour, we were looking for something a little “different” and somewhere we could</p> 

                                <Grid container>
                                    <Grid item xs={1}>
                                        <Box  p={2}> 
                                           <Avatar alt='ff' style={{marginTop:'20px'}}  src='https://a0.muscache.com/im/pictures/user/13b6164a-9194-4779-9622-089ad14f5ab1.jpg?im_w=240'/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Box p={2}>
                                            <h4>Alexa</h4>
                                            <p>April 2022</p>
                                        </Box>
                                    </Grid>
                               </Grid>
                            <p style={{marginBottom:'50px'}}>An EXPERIENCE and reminder of what matters in life. Loved every detail of it. Amazed by Hovath hospitality, uniqueness, openness, vision and passion! It is about experiencing oneself,</p> 
                 
                       </Box>
                  </Grid>
                             <p style={{fontWeight:'bold', fontSize: 15, border:'1px solid black', padding:10, borderRadius:10, marginLeft:20}}>Show all 13 reviews</p>
            </Grid>
 </Grid>
</> 
};
export default UnderHome;