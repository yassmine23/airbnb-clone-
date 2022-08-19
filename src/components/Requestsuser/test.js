import React from "react";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

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
import { useSelector, useDispatch } from "react-redux";
import { changeGuests } from "../../Redux/Actions/AllActions";
import { useTranslation } from "react-i18next";
import { DateRange, DateRangePicker } from "react-date-range";

export default function Test() {
  const { t } = useTranslation();

  const guest = useSelector((state) => state.guests.guests);
  const dispatchg = useDispatch();

  // + & - 1
  const [count1, setCount1] = useState(guest[0]);

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
  const [count2, setCount2] = useState(guest[1]);
  const IncNum2 = () => {
    setCount2(count2 + 1);
  };
  const DecNum2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
      document.getElementById("GuestsNo").innerText = `${count2} Adults`;
    } else {
      setCount2(0);
    }
  };
  // + & - 3
  const [count3, setCount3] = useState(guest[2]);
  const IncNum3 = () => {
    setCount3(count3 + 1);
  };
  const DecNum3 = () => {
    if (count3 > 0) {
      setCount3(count3 - 1);
    } else {
      setCount3(0);
    }
  };
  // + & - 4
  const [count4, setCount4] = useState(guest[3]);
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

  const addGuests = () => {
    if (count1 !== 0 || count2 !== 0 || count3 !== 0 || count4 !== 0) {
      const c4 = [count1, count2, count3, count4];
      console.log(c4);
      dispatchg(changeGuests(c4));
    }
  };

  //check availability
  // const classes = useStyles();

  //calender
  // const [value, setValue] = React.useState([null, null]);

  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  // const xn = [count1, count2, count3, count4,startDate,endDate];
  // const dispatchg = useDispatch();
  // dispatchg(changeGuests(xn));
  // console.log(xn);

  return (
    <>
      <Grid item xs={6}>
        <Box p={2}></Box>
        <Box p={2}>
          <PopupState
            variant="popover"
            popupId="demo-popup-popover"
            // style={{ position: "relative" }}
          >
            {(popupState) => (
              <div>
                <Button {...bindTrigger(popupState)}>{t("Edit")}</Button>
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

                    <button
                      type="Submit"
                      value="Submit"
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        borderRadius: "10px",
                        position: "absolute",
                        right: "7%",
                      }}
                      onClick={addGuests}
                    >
                      save
                    </button>
                  </Typography>
                </Popover>
              </div>
            )}
          </PopupState>
        </Box>
      </Grid>
    </>
  );
}
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

export function Testtwo() {
  const { t } = useTranslation();

  const guest = useSelector((state) => state.guests.guests);
  const dispatchg = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handelSelect(ranges) {
    var x1 = setStartDate(ranges.selection.startDate);
    var x2 = setEndDate(ranges.selection.endDate);
    document.getElementById("fixedP").innerText = "";
    document.getElementById(
      "selecteddates"
    ).innerText = `start date: ${ranges.selection.startDate.toDateString()} end date: ${ranges.selection.endDate.toDateString()}`;
    // document.getElementById(
    //   "reddit-input1"
    // ).value = `${ranges.selection.startDate.toDateString()}`;
    // document.getElementById(
    //   "reddit-input2"
    // ).value = `${ranges.selection.endDate.toDateString()}`;

    var date1 = new Date(ranges.selection.startDate);
    var date2 = new Date(ranges.selection.endDate);
    // To calculate the time difference of two dates
    // var Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    // document.getElementById(
    //   "NightsNo"
    // ).innerText = `$149 x ${Difference_In_Days} nights`;
    // document.getElementById("ServiceFee").innerText = `Service Fee`;
    // document.getElementById("NightsPrice").innerText = `$ ${eval(
    //   149 * Difference_In_Days
    // )}`;

    // let y = parseInt(eval(149 * Difference_In_Days));
    // document.getElementById("FeePrice").innerText = `$ ${eval(0.14 * y).toFixed(
    //   0
    // )}`;
    // let z = parseInt(eval(0.14 * y).toFixed(0));
    // document.getElementById("totalPrice").innerText = `Total before taxes`;
    // let x = y + z;
    // document.getElementById("actualPrice").innerText = `$ ${x}`;
  }

  const SelectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const addGuests2 = () => {
    if (startDate !== "") {
      const c4 = [startDate, endDate];
      console.log(c4);
      dispatchg(changeGuests(c4));
    }
  };
  const clear = () => {
    setStartDate("");
    setEndDate("");
    document.getElementById("selecteddates").innerText = "";
    // document.getElementById("fixedP").innerText =
    //   "Add your travel dates for exact pricing";
    // document.getElementById("reddit-input1").value = "add date";
    // document.getElementById("reddit-input2").value = "add date";
    // reserve
    // document.getElementById("NightsNo").innerText = "";
    // document.getElementById("ServiceFee").innerText = "";
    // document.getElementById("NightsPrice").innerText = "";
    // document.getElementById("FeePrice").innerText = "";
    // document.getElementById("totalPrice").innerText = "";
    // document.getElementById("actualPrice").innerText = "";
  };
  //calender
  // const [value, setValue] = React.useState([null, null]);

  return (
    <>
      {/* <RedditTextField
                        defaultValue="Add date"
                        id="reddit-input1"
                      />

<RedditTextField
          defaultValue="Add date"
          id="reddit-input2"
        /> */}

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
                    {/* <button type="button" onClick={addGuests2}>
                      save
                    </button> */}
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
              <p id="NightsNo"> </p>
              <p id="ServiceFee"> </p>
            </Box>
          </Grid>
          <Grid item xs={3} s>
            <Box p={2}>
              <p id="NightsPrice"></p>
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
    </>
  );
}
