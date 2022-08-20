import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { positions } from "@mui/system";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GppGoodIcon from "@mui/icons-material/GppGood";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { DateRange, DateRangePicker } from "react-date-range";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";

import StarIcon from "@mui/icons-material/Star";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//check availability
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
//check availability
import { alpha, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// + & -
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeGuests2, changeLanguage } from "../../Redux/Actions/AllActions";
import { changeGuests } from "./../../Redux/Actions/AllActions";
const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();
  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const UnderHome = () => {
  const datareq=useSelector((state)=>state.requestDetail.details)
console.log(datareq.title)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handelSelect(ranges) {
    var x1 = setStartDate(ranges.selection.startDate);
    var x2 = setEndDate(ranges.selection.endDate);
    document.getElementById("fixedP").innerText = "";
    document.getElementById(
      "selecteddates"
    ).innerText = `start date: ${ranges.selection.startDate.toDateString()} end date: ${ranges.selection.endDate.toDateString()}`;
    document.getElementById(
      "reddit-input1"
    ).value = `${ranges.selection.startDate.toDateString()}`;
    document.getElementById(
      "reddit-input2"
    ).value = `${ranges.selection.endDate.toDateString()}`;

    // reserve
    //    var x=parseInt(ranges.selection.endDate.toDateString()-ranges.selection.startDate.toDateString())
    //    console.log(x)

    var date1 = new Date(ranges.selection.startDate);
    var date2 = new Date(ranges.selection.endDate);
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    document.getElementById(
      "NightsNo"
    ).innerText = `$149 x ${Difference_In_Days} nights`;
    document.getElementById("ServiceFee").innerText = `Service Fee`;
    document.getElementById("NightsPrice").innerText = `$ ${eval(
      149 * Difference_In_Days
    )}`;

    let y = parseInt(eval(149 * Difference_In_Days));
    document.getElementById("FeePrice").innerText = `$ ${eval(0.14 * y).toFixed(
      0
    )}`;
    let z = parseInt(eval(0.14 * y).toFixed(0));
    document.getElementById("totalPrice").innerText = `Total before taxes`;
    let x = y + z;
    //   document.getElementById('actualPrice').innerText=`$ ${y+z}`
    document.getElementById("actualPrice").innerText = `$ ${x}`;
  }

  const SelectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const clear = () => {
    setStartDate("");
    setEndDate("");
    document.getElementById("selecteddates").innerText = "";
    document.getElementById("fixedP").innerText =
      "Add your travel dates for exact pricing";
    document.getElementById("reddit-input1").value = "add date";
    document.getElementById("reddit-input2").value = "add date";
    // reserve
    document.getElementById("NightsNo").innerText = "";
    document.getElementById("ServiceFee").innerText = "";
    document.getElementById("NightsPrice").innerText = "";
    document.getElementById("FeePrice").innerText = "";
    document.getElementById("totalPrice").innerText = "";
    document.getElementById("actualPrice").innerText = "";
  };

  // + & - 1
  const [count1, setCount1] = useState(0);
  const IncNum1 = () => {
    setCount1(count1 + 1);
  };
  const DecNum1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    } else {
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
    if (count2 > 0) {
      setCount2(count2 - 1);
      document.getElementById("GuestsNo").innerText = `${count2} Adults`;
    } else {
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
    if (count3 > 0) {
      setCount3(count3 - 1);
    } else {
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
    if (count4 > 0) {
      setCount4(count4 - 1);
    } else {
      setCount4(0);
      alert("min limit reached");
    }
  };

  const addGuests = (ev) => {

    
    if (count1 !== 0 || count2 !== 0 || count3 !== 0 || count4 !== 0) {
      document.getElementById(
        "GuestsNo"
      ).innerText = `${count1} Adults, ${count2} children, ${count3} Infants, ${count4} pets `;
    }
    //    ev.target.Popover('hiden')
  };

  var Difference_In_Time = endDate.getTime() - startDate.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let service  = parseInt(eval((datareq.price * Difference_In_Days)*0.14).toFixed(0));
    let total =service+(datareq.price * Difference_In_Days);
    const dispatchg = useDispatch();
    const x4={"count1":count1,"count2":count2,"count3":count3,"count4":count4}
    dispatchg(changeGuests(x4));
    const Dates={"endDate":endDate,"startDate":startDate,"Difference_In_Days":Difference_In_Days,"service":service,"total":total}
    dispatchg(changeGuests2(Dates));

  //check availability
  const classes = useStyles();

  //calender
  const [value, setValue] = React.useState([null, null]);

  /////////////////////////////////
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "black" : "#308fe8",
    },
  }));

  return (
    <>
      <Grid container my={4}>
        <Grid item xs={7}>
          <Box
            style={{
              position: "relative",
              borderBottom: "1px solid lightgray",
            }}
            p={2}
          >
            <h2>Lighthouse hosted by Neven</h2>
            <p>8 guests . 1 bedroom . 1 bed . 1 bath</p>
            <Avatar
              style={{ position: "absolute", top: 50, right: "2%" }}
              src="https://a0.muscache.com/im/pictures/user/d4a7051c-d7e9-46cc-bcbc-6389a7a4509b.jpg?im_w=240"
            />
          </Box>
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
            <ApartmentIcon />{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              Dedicated workspace
            </span>
            <p>A common area with wifi that's well-suited for working.</p>
            <GppGoodIcon />{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              Self check-in{" "}
            </span>
            <p>Check yourself in with the lockbox.</p>
            <EventBusyIcon />{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              Free cancellation befire Aug 7.
            </span>
          </Box>
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
            <img
              width="150wv"
              height="40hv"
              alt="ss"
              src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
            />
            <p>
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </p>
          </Box>
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
            <p>
              Head north in Norway and experience our tiny-hotel on a remote
              island. The Arctic Hideaway is an architecturally playful and
              stunning collection of 11 individual buildings, where fours are
              sleeping cabins. The shared areas are the iconic Tower House,
              kitchen house, studio building, bathhouse, crab trap and sauna. In
              limited periods, we will offer single cabins for rent on Airbnb.
              Included in the stay is all food (se details for concept) and
              daily use of the sauna...
            </p>
            {/* <Link style={{color:'black',textDecoration:'underLine',fontWeight:'bold'}} href="#">Show more</Link> */}
          </Box>
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
            <h2>Where you'll sleep</h2>
            {/* <p style={{borderRadius:'80px'}} > */}
            <img
              alt="dd"
              width="280wv"
              height="200hv"
              src="https://a0.muscache.com/im/pictures/2b39e799-e7c4-4d23-bdea-d63c457f76e3.jpg?im_w=720"
            />
            {/* </p> */}
            <p>
              <h3>Bedroom</h3>
              <p>1 queen bed</p>{" "}
            </p>
          </Box>
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
            <h2>What this place offers</h2>
            <Grid container>
              <Grid item xs={6}>
                <Box p={2}>
                  <p>
                    <BeachAccessIcon />{" "}
                    <span style={{ fontSize: 20 }}>
                      Beach access-Beachfront
                    </span>
                  </p>
                  <p>
                    <WifiOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>Wifi</span>
                  </p>
                  <p>
                    <BathtubOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>
                      Free parking om premises
                    </span>
                  </p>
                  <p>
                    <PetsOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>Pets allowed</span>
                  </p>
                  <p>
                    <LocalLaundryServiceOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>Dryer</span>
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box p={2}>
                  <p>
                    <BlenderOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>Kitchen</span>
                  </p>
                  <p>
                    <WorkspacePremiumOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>Dedicated workspace</span>
                  </p>
                  <p>
                    <DirectionsCarFilledOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>shared hot tub</span>
                  </p>
                  <p>
                    <GppGoodIcon /> <span style={{ fontSize: 20 }}>Washer</span>
                  </p>
                  <p>
                    <BlockOutlinedIcon />{" "}
                    <span
                      style={{ fontSize: 20, textDecoration: "line-through" }}
                    >
                      Carbon momoxide alarm
                    </span>
                  </p>
                </Box>
              </Grid>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  border: "1px solid black",
                  padding: 10,
                  borderRadius: 10,
                  marginLeft: 20,
                }}
              >
                Show all 38 amentities
              </p>
            </Grid>
          </Box>
          <Box p={2}>
            <h3>5 nights in Gildeskal</h3>
            <p>Sep 20, 2020 - Sep 25, 2022</p>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDateRangePicker
                style={{ position: "relative" }}
                displayStaticWrapperAs="desktop"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                //     minDate={new Date()}
                //     ranges={[SelectionRange]}
                //   onChange={handelSelect}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
              <Button
                onClick={() => clear()}
                style={{
                  position: "absolute",
                  left: "45%",
                  color: "black",
                  textDecoration: "underLine",
                }}
              >
                CLEAR DATES
              </Button>
            </LocalizationProvider>
          </Box>
        </Grid>

        <Grid item xs={5} style={{ position: "relative", marginTop: "50px" }}>
          <Box
            style={{
              height: "100hv",
              boxShadow: "0px 1px 26px -6px rgba(0,0,0,0.59)",
              position: "sticky",
              top: "55px",
              bottom: "599px",
              marginLeft: "50px",
              width: "50wv",
              borderRadius: "20px",
              border: "1px solid lightgray",
            }}
            p={2}
          >
           

          <Grid
              container
              style={{ border: "1px solid lightgray", borderRadius: "20px" }}
            >
              <Grid container>
                <Grid item xs={6} s>
                  <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
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
                  {/* add guests */}
                  <Box p={2}>
                    <p style={{ fontWeight: "bold", fontSize: 12 }}>GUESTS</p>
                    <p style={{ fontSize: 15 }} id="GuestsNo"></p>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    p={2}
                    style={{
                      borderBottom: "1px solid lightgray",
                      borderLeft: "1px solid lightgray",
                    }}
                  >
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
                  <Box p={2} style={{ position: "relative" }}>
                    <PopupState
                      variant="popover"
                      popupId="demo-popup-popover"
                      style={{ position: "relative" }}
                    >
                      {(popupState) => (
                        <div
                          style={{
                            position: "absolute",
                            top: "44%",
                            right: "7%",
                            color: "black",
                          }}
                        >
                          <Button
                            variant="contained"
                            {...bindTrigger(popupState)}
                          >
                            <ExpandMoreIcon />
                          </Button>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
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
                                      style={{
                                        textDecoration: "underLine",
                                        fontSize: "15px",
                                      }}
                                    >
                                      Bringing a service animal?
                                    </p>
                                  </Box>
                                </Grid>
                                <Grid item xs={5} s>
                                  <Box p={2}>
                                    <Grid
                                      container
                                      style={{ marginBottom: "50px" }}
                                    >
                                      <Grid item xs={5} s>
                                        <Box>
                                          <Button onClick={IncNum1}>
                                            <AddIcon size="small" />
                                          </Button>
                                        </Box>
                                      </Grid>
                                      <Grid item xs={2} s>
                                        <Box
                                          style={{ position: "relative" }}
                                          p={2}
                                        >
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

                                    <Grid
                                      container
                                      style={{ marginBottom: "50px" }}
                                    >
                                      <Grid item xs={5} s>
                                        <Box>
                                          <Button onClick={IncNum2}>
                                            <AddIcon size="small" />
                                          </Button>
                                        </Box>
                                      </Grid>
                                      <Grid item xs={2} s>
                                        <Box
                                          style={{ position: "relative" }}
                                          p={2}
                                        >
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

                                    <Grid
                                      container
                                      style={{ marginBottom: "50px" }}
                                    >
                                      <Grid item xs={5} s>
                                        <Box>
                                          <Button onClick={IncNum3}>
                                            <AddIcon size="small" />
                                          </Button>
                                        </Box>
                                      </Grid>
                                      <Grid item xs={2} s>
                                        <Box
                                          style={{ position: "relative" }}
                                          p={2}
                                        >
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
                                        <Box
                                          style={{ position: "relative" }}
                                          p={2}
                                        >
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

                              <button
                                type="Submit"
                                value="Submit"
                                style={{
                                  color: "white",
                                  backgroundColor: "blue",
                                  borderRadius: "10px",
                                  position: "absolute",
                                  right: "7%",
                                }}
                                onClick={addGuests(Event)}
                              >
                                ok
                              </button>
                              {/* <button class="btn btn-primary OK">OK</button> */}

                              {/* <Grid  container>
                                        <Grid item xs={6} >
                                            <Box> 
                                               <p>This place has a maximum of 2 guests,
                                                 not including infants. 
                                                If you're bringing more than 
                                                2 pets, please let your host know.</p>      
                                            </Box>
                                        </Grid>
                                        </Grid> */}
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
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <Button
                      style={{
                        borderRadius: "5px",
                        marginLeft: "25px",
                        marginTop: "15px",
                        fontSize: "20px",
                        paddingLeft: "75px",
                        paddingRight: "75px",
                        textAlign: "center",
                        backgroundColor: "red",
                        color: "white",
                      }}
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      Check Availability
                    </Button>
                    <Link to={"/details/book"}>
                      <Button
                        style={{
                          borderRadius: "5px",
                          marginLeft: "95px",
                          marginTop: "15px",
                          fontSize: "20px",
                          paddingLeft: "75px",
                          paddingRight: "75px",
                          textAlign: "center",
                          backgroundColor: "gray",
                          color: "white",
                        }}
                      >
                        Reserve
                      </Button>
                    </Link>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Typography sx={{ p: 2 }}>
                        <Grid container>
                          <Grid item xs={5} s>
                            <Box p={2}>
                              <h3>Select dates</h3>
                              <p id="selecteddates"></p>
                              <p id="fixedP">
                                Add your travel dates for exact pricing
                              </p>
                            </Box>
                          </Grid>
                         
                        </Grid>

                        <div>
                          <DateRangePicker
                            ranges={[SelectionRange]}
                            onChange={handelSelect}
                          />
                        </div>
                        <Button
                          onClick={clear}
                          style={{
                            position: "absolute",
                            right: "30px",
                            color: "black",
                            textDecoration: "underLine",
                          }}
                        >
                          CLEAR DATES
                        </Button>
                      
                      </Typography>
                    </Popover>
                  </div>
                )}
              </PopupState>

              {/* under check availability */}
              <Grid container style={{ borderBottom: "1px solid lightgray" }}>
                <Grid item xs={9} s>
                  <Box p={2}>
                    {/* <h3>Select dates</h3> */}
                    <p id="NightsNo"> </p>
                    <p id="ServiceFee"> </p>
                  </Box>
                </Grid>
                <Grid item xs={3} s>
                  <Box p={2}>
                    {/* <h3>Select dates</h3> */}
                    <p id="NightsPrice"> </p>
                    <p id="FeePrice"> </p>
                  </Box>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={9} s>
                  <Box p={2}>
                    <p
                      id="totalPrice"
                      style={{ fontWeight: "bold", fontSize: "20px" }}
                    ></p>
                  </Box>
                </Grid>
                <Grid item xs={3} s>
                  <Box p={2}>
                    <p
                      id="actualPrice"
                      style={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      {" "}
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

  
    </>
  );
};
export default UnderHome;
