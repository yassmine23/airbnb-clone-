import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
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
import { DateRangePicker } from "react-date-range";

import StarIcon from "@mui/icons-material/Star";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { alpha, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector, useDispatch } from "react-redux";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { changeGuests, changeGuests2 } from "./../../Redux/Actions/AllActions";


//check availbility
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


// the begning of function
const UnderHome = () => {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next");
  //date and pickers
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handelSelect(ranges) {
    var x1 = setStartDate(ranges.selection.startDate);
    var x2 = setEndDate(ranges.selection.endDate);
    document.getElementById("fixedP").innerText = "";
    document.getElementById(
      "selecteddates"
    ).innerText = `start date: ${ranges.selection.startDate.toDateString()} end date: ${ranges.selection.endDate.toDateString()}`;
    document.getElementById('outerSelected').innerText=`From ${ranges.selection.startDate.toDateString()}  To  ${ranges.selection.endDate.toDateString()}`

    document.getElementById(
      "reddit-input1"
    ).value = `${ranges.selection.startDate.toDateString()}`;
    document.getElementById(
      "reddit-input2"
    ).value = `${ranges.selection.endDate.toDateString()}`;
    var date1 = new Date(ranges.selection.startDate);
    var date2 = new Date(ranges.selection.endDate);
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
   
    document.getElementById(
      "NightsNo"
    ).innerText = `$${dataDetails.price} x ${Difference_In_Days} nights`;
    document.getElementById("ServiceFee").innerText = `Service Fee`;
    document.getElementById("NightsPrice").innerText = `$${eval(
      dataDetails.price * Difference_In_Days
    )}`;
    let y = parseInt(eval(dataDetails.price * Difference_In_Days));
    document.getElementById("FeePrice").innerText = `$${eval(0.14 * y).toFixed(
      0
    )}`;
    let z = parseInt(eval(0.14 * y).toFixed(0));
    document.getElementById("totalPrice").innerText = `Total before taxes`;
    let x = y + z;
    document.getElementById("actualPrice").innerText = `$${x}`;
    document.getElementById('noNights').innerText=`${Difference_In_Days} nights in `;
    document.getElementById('cancelationDate').innerText=`${ranges.selection.startDate.toDateString()}`;
  }

  const SelectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  //increment and decrement
  // 1
  const clear = () => {
    setStartDate("");
    setEndDate("");
    document.getElementById("selecteddates").innerText = "";
    document.getElementById("fixedP").innerText =
      "Add your travel dates for exact pricing";
    document.getElementById("reddit-input1").value = "add date";
    document.getElementById("reddit-input2").value = "add date";
    document.getElementById("NightsNo").innerText = "";
    document.getElementById("ServiceFee").innerText = "";
    document.getElementById("NightsPrice").innerText = "";
    document.getElementById("FeePrice").innerText = "";
    document.getElementById("totalPrice").innerText = "";
    document.getElementById("actualPrice").innerText = "";
    document.getElementById('outerSelected').innerText=''

  };

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
  //  2
  const [count2, setCount2] = useState(0);
  const IncNum2 = () => {
    setCount2(count2 + 1);
  };
  const DecNum2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
      document.getElementById("GuestsNo").innerText = `${count2} {t("Adults)}`;
    } else {
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
    if (count3 > 0) {
      setCount3(count3 - 1);
    } else {
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
    if (count4 > 0) {
      setCount4(count4 - 1);
    } else {
      setCount4(0);
      alert("min limit reached");
    }
  };

  //to show selected guests
  const addGuests = (ev) => {
    if (count1 !== 0 || count2 !== 0 || count3 !== 0 || count4 !== 0) {
      document.getElementById(
        "GuestsNo"
      ).innerText = `${count1} Adults, ${count2} children, ${count3} Infants, ${count4} pets `;
    }
  };
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
  //data from database
  var dataDetails = useSelector((state) => state.requestDetail.details);
  // page requst
    var date1 = new Date(startDate.getTime());
    var date2 = new Date(endDate.getTime());
   var Difference_In_Time = date2 - date1 ;
  // To calculate the no. of days between two dates
  var DifferenceInDays =parseInt(Difference_In_Time / (1000 * 3600 * 24));
  let service =parseInt((dataDetails.price * DifferenceInDays * 0.14));
  let total =parseInt( service + (dataDetails.price * DifferenceInDays));
  const dispatchg = useDispatch();
  const x4 = { count1: count1, count2: count2, count3: count3, count4: count4 };
  dispatchg(changeGuests(x4));
  const Dates = {
    endDate: endDate,
    startDate: startDate,
    Difference_In_Days: DifferenceInDays,
    service: service,
    total: total,
  };
  dispatchg(changeGuests2(Dates));

  return (
    <>
      <Grid container my={4}>
        {/* left side */}
        <Grid item xs={7} style={{ position: "relative" }}>
          <Box
            style={{
              position: "relative",
              borderBottom: "1px solid lightgray",
              marginLeft: "5%",
            }}
            p={2}
          >
            <Grid container>
              <Grid item xs={11}>
                <Box p={2}>
                  {currentLanguageCode==="ar"?( <h2 style={{ fontWeight: "bold", fontSize: "25px" }}>
              {dataDetails.titleAr}
            </h2>):( <h2 style={{ fontWeight: "bold", fontSize: "25px" }}>
              {dataDetails.title}
            </h2>)}
            
                  {currentLanguageCode==="ar"?( <p>{dataDetails.descriptionAr}</p>):(<p>{dataDetails.description}</p>)}
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box p={2}>
                  <Avatar src={dataDetails.Url} />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
            <ApartmentIcon />{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              {dataDetails.name}{t("isaSuperhost")}
            </span>
            <p>{t("Superhostsareexperienced")}</p>
            <GppGoodIcon />{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              {t("Greatexperience")}{" "}
            </span>
            <p>{t("checkinprocess")}</p>
            <EventBusyIcon />{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              {t("Freecancellationbefore")} <span id='cancelationDate'></span>
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
           {t("Everybooking")}
            </p>
            <a
              style={{
                color: "black",
                textDecoration: "underLine",
                fontWeight: "bold",
              }}
              href="#"
            >
              Learn more
            </a>
          </Box>
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
          {currentLanguageCode==="ar"?(<p>{dataDetails.descriptionAr}
            </p>):(<p>{dataDetails.description}</p>)}
                    
          </Box>
    
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
            <h2>{t("offers")}</h2>
            <Grid container>
              <Grid item xs={6}>
                <Box p={2}>
                  <p>
                    <BeachAccessIcon />{" "}
                    <span style={{ fontSize: 20 }}>
                      {t("BeachaccessBeachfront")}
                    </span>
                  </p>
                  <p>
                    <WifiOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>{t("Wifi")}</span>
                  </p>
                  <p>
                    <BathtubOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>
                    {t("Freeparkingonpremises")}
                    </span>
                  </p>
                  <p>
                    <PetsOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>{t("Petsallowed")}</span>
                  </p>
                  <p>
                    <LocalLaundryServiceOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>{t("Dryer")}</span>
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box p={2}>
                  <p>
                    <BlenderOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>{t("Kitchen")}</span>
                  </p>
                  <p>
                    <WorkspacePremiumOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>{t("Dedicatedworkspace")}</span>
                  </p>
                  <p>
                    <DirectionsCarFilledOutlinedIcon />{" "}
                    <span style={{ fontSize: 20 }}>{t("sharedhottub")}</span>
                  </p>
                  <p>
                    <GppGoodIcon /> <span style={{ fontSize: 20 }}>{t("Washer")}</span>
                  </p>
                  <p>
                    <BlockOutlinedIcon />{" "}
                    <span
                      style={{ fontSize: 20, textDecoration: "line-through" }}
                    >
                     {t("Carbonmonoxidealarm")}
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
               {t("Showall38amentities")}
              </p>
            </Grid>
          </Box>
          {/* change */}
          <Box p={2} xs={2} style={{ position: "relative" }}>
            <span
              style={{ fontWeight: "bold", fontSize: "25px" }}
              id="noNights"
            ></span>
            {currentLanguageCode==="ar"?(  <span style={{ fontWeight: "bold", fontSize: "25px" }}>
              {dataDetails.addressAr}
            </span>):(  <span style={{ fontWeight: "bold", fontSize: "25px" }}>
              {dataDetails.address}
            </span>)}
            {/* <span style={{ fontWeight: "bold", fontSize: "25px" }}>
              {dataDetails.address}
            </span> */}
            <p id="outerSelected" style={{ fontWeight: "bold" }}></p>
            <div style={{width:'50%'}}>
              <DateRangePicker
                ranges={[SelectionRange]}
                onChange={handelSelect}
              />
            </div>
            <Button
              onClick={clear}
              style={{
                position: "absolute",
                top: "95%",
                right: "8%",
                color: "black",
                textDecoration: "underLine",
              }}
            >
            {t("CLEARDATES")}
            </Button>
          </Box>
        </Grid>

        {/* Right side */}
        <Grid item xs={5} style={{ position: "relative", marginTop: "50px" }}>
          <Box
            style={{
              margin: "0 10%",
              height: "100hv",
              boxShadow: "0px 1px 26px -6px rgba(0,0,0,0.59)",
              position: "sticky",
              top: "20px",
              bottom: "599px",
              width: "90%",
              borderRadius: "20px",
              border: "1px solid lightgray",
            }}
            p={2}
          >
            <Grid container>
              <Grid item xs={6}>
                <Box p={2}>
                  <p>
                    <span style={{ fontWeight: "bold", fontSize: 22 }}>
                      {dataDetails.price}
                    </span>
                    {t("total")}
                  </p>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box p={2}>
                  <p>
                    <StarIcon />
                    4.86.
                    <span style={{ textDecoration: "underLine" }}>
                      14 {t("reviews")}
                    </span>
                  </p>
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ border: "1px solid lightgray", borderRadius: "20px" }}
            >
              <Grid container>
                {/* change and display calender */}
                <Grid item xs={12}>
                  <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <div>
                          <button
                            style={{
                              width: "100%",
                              borderRadius: "5px",
                              marginLeft: "0%",
                              marginTop: "15px",
                              fontSize: "120%",
                              paddingTop: "2%",
                              paddingBotton: "2%",
                              textAlign: "center",
                              backgroundColor: "transparent",
                              color: "black",
                              border: "none",
                              display: "flex",
                              flexDirection: "row",
                            }}
                            variant="contained"
                            {...bindTrigger(popupState)}
                          >
                            <form>
                              <RedditTextField
                                label={t("CHECKIN")}
                                defaultValue={t("Adddate")}
                                variant="filled"
                                id="reddit-input1"
                              />
                            </form>
                            <form>
                              <RedditTextField
                                label={t("CHECKOUT")}
                                defaultValue={t("Adddate")}
                                variant="filled"
                                id="reddit-input2"
                              />
                            </form>
                          </button>
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
                                      {t("Addyourtravel")}
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
                                {t("CLEARDATES")}
                              </Button>
                            </Typography>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </Box>
                
                </Grid>
                {/* arrow choose guest */}

                <Grid item xs={6} s>
                  {/* title GUESTS */}
                  <Box p={2}>
                    <p style={{ fontWeight: "bold", fontSize: 12 }}>{t("GUESTS")}</p>
                    <p style={{ fontSize: 15 }} id="GuestsNo"></p>
                  </Box>
                </Grid>
                {/* add guest */}
                <Grid item xs={6}>
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
                            variant=""
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
                                  <h4>{t("Adults")}</h4>
                                    <p>{t("Ages13orabove")}+</p>
                                    <h4>{t("Children")}</h4>
                                    <p>{t("Ages2–12")}</p>
                                    <h4>{t("Infants")}</h4>
                                    <p>{t("Under2")}</p>
                                    <h4>{t("Pets")}</h4>
                                  </Box>
                                </Grid>
                                <Grid item xs={5} s>
                                  <Box p={2}>
                                    <Grid
                                      container
                                      style={{ marginBottom: "35px" }}
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
                                              right: "15%",
                                              top: "0%",
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
                                      style={{ marginBottom: "40px" }}
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
                                              right: "15%",
                                              top: "0%",
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
                                      style={{ marginBottom: "40px" }}
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
                                              right: "15%",
                                              top: "0%",
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
                                              right: "15%",
                                              top: "0%",
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
                                className="btn btn-dark"
                                type="Submit"
                                value="Submit"
                                style={{
                                  color: "white",
                                  borderRadius: "10px",
                                  position: "absolute",
                                  right: "7%",
                                }}
                                onClick={addGuests(Event)}
                              >
                                {t("save")}
                              </button>
                            </Typography>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* click */}
            <Box>
              {startDate ? (
                <Link to={"/details/book"}>
                  <Button
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      marginLeft: "0%",
                      marginTop: "15px",
                      fontSize: "120%",
                      paddingTop: "2%",
                      paddingBotton: "2%",
                      textAlign: "center",
                      backgroundColor: "#FF385C",
                      color: "white",
                    }}
                  >
                    Reserve
                  </Button>
                </Link>
              ) : (
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <Button
                        style={{
                          width: "100%",
                          borderRadius: "5px",
                          marginLeft: "0%",
                          marginTop: "15px",
                          fontSize: "120%",
                          paddingTop: "2%",
                          paddingBotton: "2%",
                          textAlign: "center",
                          backgroundColor: "#FF385C",
                          color: "white",
                        }}
                        variant="contained"
                        {...bindTrigger(popupState)}
                      >
                        Check Availability
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
                           {t("CLEARDATES")}
                          </Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              )}

              {/* under check availability */}
              <Grid container style={{ borderBottom: "1px solid lightgray" }}>
                <Grid item xs={9} s>
                  <Box p={2}>
                    <p id="NightsNo"> </p>
                    <p id="ServiceFee"> </p>
                  </Box>
                </Grid>
                <Grid item xs={3} s>
                  <Box p={2}>
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

      {/* end */}
      <Grid
        container
        style={{
          borderBottom: "1px solid lightgray",
          borderTop: "1px solid lightgray",
        }}
      >
        <Grid item xs={6}>
          <Box p={2}>
            <StarIcon />{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              {" "}
              4.85 . 13 {t("reviews")} {" "}
            </span>
            <Grid container>
              <Grid item xs={6}>
                <Box p={2}>
                  <p>{t("Clearness")}</p>
                  <p>{t("Communication")}</p>
                  <p>{t("CHECKIN")}</p>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box p={2}>
                  <BorderLinearProgress
                    style={{ marginTop: "27px" }}
                    variant="determinate"
                    value={80}
                  />
                  <BorderLinearProgress
                    style={{ marginTop: "27px" }}
                    variant="determinate"
                    value={85}
                  />
                  <BorderLinearProgress
                    style={{ marginTop: "27px" }}
                    variant="determinate"
                    value={90}
                  />
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
                <Box style={{ marginTop: "27px" }} p={2}>
                  <p>{t("Accuracy")}</p>
                  <p>{t("Location")}</p>
                  <p>{t("Value")}</p>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box p={2} style={{ marginTop: "27px" }}>
                  <BorderLinearProgress
                    style={{ marginTop: "30px" }}
                    variant="determinate"
                    value={90}
                  />
                  <BorderLinearProgress
                    style={{ marginTop: "27px" }}
                    variant="determinate"
                    value={95}
                  />
                  <BorderLinearProgress
                    style={{ marginTop: "27px" }}
                    variant="determinate"
                    value={75}
                  />
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box p={2} style={{ marginTop: "27px" }}>
                  <p>4.8</p>
                  <p>4.9</p>
                  <p>4.3</p>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

      
      </Grid>
    
    </>
  );
};
export default UnderHome;
