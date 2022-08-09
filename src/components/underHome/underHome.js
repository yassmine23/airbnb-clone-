import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { positions } from "@mui/system";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GppGoodIcon from "@mui/icons-material/GppGood";
import EventBusyIcon from "@mui/icons-material/EventBusy";
// import IconButton from '@mui/material/IconButton';
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
// import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
// import LinearProgress from '@mui/material/LinearProgress';

import TextField from "@mui/material/TextField";
// import  LocalizationProvider  from '@mui/x-date-pickers-pro';
// import  AdapterDateFns  from '@mui/x-date-pickers-pro/AdapterDateFns';
// import  StaticDateRangePicker  from '@mui/x-date-pickers-pro/StaticDateRangePicker';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import  DatePicker  from "@mui/x-date-pickers/DatePicker";
// import  LocalizationProvider  from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
///
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { KeyboardDatePicker } from '@material-ui/pickers';
import StarIcon from "@mui/icons-material/Star";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const UnderHome = () => {
  const { t } = useTranslation();

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
  // const [value, setValue] = React.useState([null, null]);
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
            <p>{t("Everybooking")}</p>
            <Link
              style={{
                color: "black",
                textDecoration: "underLine",
                fontWeight: "bold",
              }}
              href="#"
            >
              {t("buttonLearn")}
            </Link>
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
            <Link
              style={{
                color: "black",
                textDecoration: "underLine",
                fontWeight: "bold",
              }}
              href="#"
            >
              {t("buttonLearn")}
            </Link>
          </Box>
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
            <h2>{t("Wheresleep")}</h2>
            <img
              alt="dd"
              width="280wv"
              height="200hv"
              src="https://a0.muscache.com/im/pictures/2b39e799-e7c4-4d23-bdea-d63c457f76e3.jpg?im_w=720"
            />
            <p>
              <h3>Bedroom</h3>
              <p>1 queen bed</p>{" "}
            </p>
          </Box>
          <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
            <h2>{t("offers")}</h2>
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
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                </LocalizationProvider> */}
          </Box>
        </Grid>

        <Grid item xs={5} style={{ position: "relative", marginTop: "50px" }}>
          <Box
            style={{
              height: "100hv",
              boxShadow: "0px 1px 26px -6px rgba(0,0,0,0.59)",
              position: "sticky",
              top: "150px",
              bottom: "599px",
              marginLeft: "50px",
              width: "50wv",
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
                      $149
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
                      14{t("reviews")}
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
                <Grid item xs={6} s>
                  <Box style={{ borderBottom: "1px solid lightgray" }} p={2}>
                    <p style={{ fontWeight: "bold", fontSize: 12 }}>
                      {t("CHECKIN")}
                    </p>
                    <p style={{ fontSize: 15 }}>Add date</p>
                  </Box>
                  <Box p={2}>
                    <p style={{ fontWeight: "bold", fontSize: 12 }}>
                      {t("GUESTS")}
                    </p>
                    <p style={{ fontSize: 15 }}> 1 guest</p>
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
                    <p style={{ fontWeight: "bold", fontSize: 12 }}>
                      {t("CHECKOUT")}
                    </p>
                    <p style={{ fontSize: 15 }}>Add date</p>
                  </Box>
                  <Box p={2}>
                    <ExpandMoreIcon
                      style={{
                        fontSize: "30px",
                        marginLeft: "135px",
                        marginTop: "30px",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Button
              style={{
                borderRadius: "5px",
                marginLeft: "30px",
                marginTop: "15px",
                fontSize: "20px",
                paddingLeft: "55px",
                paddingRight: "55px",
                textAlign: "center",
                backgroundColor: "red",
                color: "white",
              }}
            >
              {t("check")}
            </Button>
          </Box>
        </Grid>
      </Grid>

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
              4.85 . 13 {t("reviews")}
            </span>
            <Grid container>
              <Grid item xs={6}>
                <Box p={2}>
                  <p>Clearness</p>
                  <p>Communication</p>
                  <p>Check-in</p>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box p={2}>
                  <BorderLinearProgress
                    style={{ marginTop: "30px" }}
                    variant="determinate"
                    value={80}
                  />
                  <BorderLinearProgress
                    style={{ marginTop: "30px" }}
                    variant="determinate"
                    value={85}
                  />
                  <BorderLinearProgress
                    style={{ marginTop: "30px" }}
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
              {/* <p style={{fontWeight:'bold', fontSize: 15, border:'1px solid black', padding:10, borderRadius:10, marginLeft:20}}>Show all 38 amentities</p> */}
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box p={2}>
            <Grid container>
              <Grid item xs={6}>
                <Box style={{ marginTop: "27px" }} p={2}>
                  <p>Accuracy</p>
                  <p>Location</p>
                  <p>Value</p>
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
                    style={{ marginTop: "30px" }}
                    variant="determinate"
                    value={95}
                  />
                  <BorderLinearProgress
                    style={{ marginTop: "30px" }}
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
              {/* <p style={{fontWeight:'bold', fontSize: 15, border:'1px solid black', padding:10, borderRadius:10, marginLeft:20}}>Show all 38 amentities</p> */}
            </Grid>
          </Box>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <Box p={2}>
              <Grid container>
                <Grid item xs={1}>
                  <Box p={2}>
                    <Avatar
                      alt="ff"
                      style={{ marginTop: "20px" }}
                      src="https://a0.muscache.com/im/pictures/user/a5942301-fc09-4e3e-b6bb-ce9de9d593f9.jpg?im_w=240"
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box p={2}>
                    <h4>John</h4>
                    <p>July 2022</p>
                  </Box>
                </Grid>
              </Grid>

              <p style={{ marginBottom: "50px" }}>
                Amazing experience at the Arctic Hideaway. An opportunity to
                relax, meet great people and reflect and renew oneself, while
                being connected to a wonderful landscape and nature.
              </p>

              <Grid container>
                <Grid item xs={1}>
                  <Box p={2}>
                    <Avatar
                      alt="ff"
                      style={{ marginTop: "20px" }}
                      src="https://a0.muscache.com/im/pictures/user/2f8d6959-5f20-4d27-849c-3875be83caf9.jpg?im_w=240"
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box p={2}>
                    <h4>Morten</h4>
                    <p>July 2021</p>
                  </Box>
                </Grid>
              </Grid>

              <p style={{ marginBottom: "50px" }}>
                Very nice experience, had some mixed wheather but that can’t be
                helped
              </p>

              <Grid container>
                <Grid item xs={1}>
                  <Box p={2}>
                    <Avatar
                      alt="ff"
                      style={{ marginTop: "20px" }}
                      src="https://a0.muscache.com/im/pictures/user/a51de333-9ec9-48c0-b494-cbcf8aaa394c.jpg?im_w=240"
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box p={2}>
                    <h4>Mario</h4>
                    <p>March 2022</p>
                  </Box>
                </Grid>
              </Grid>

              <p style={{ marginBottom: "50px" }}>
                This is a good place to get a break from the world. We were so
                lucky to have both beautiful sunsets and amazing northern
                lights. Location 10/10. Cool concept. Great potential. Pay
              </p>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box p={2}>
              <Grid container>
                <Grid item xs={1}>
                  <Box p={2}>
                    <Avatar
                      alt="ff"
                      style={{ marginTop: "20px" }}
                      src="https://a0.muscache.com/im/pictures/user/720b466c-75e8-460a-a896-c3641a91cc59.jpg?im_w=240"
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box p={2}>
                    <h4>Marcorio</h4>
                    <p>Jan 2022</p>
                  </Box>
                </Grid>
              </Grid>

              <p style={{ marginBottom: "50px" }}>
                Be ready for a magical experience in a very unique place that
                you will remember forever. This place will give you a sense of
                peace and calmness that.
              </p>

              <Grid container>
                <Grid item xs={1}>
                  <Box p={2}>
                    <Avatar
                      alt="ff"
                      style={{ marginTop: "20px" }}
                      src="https://a0.muscache.com/im/pictures/user/d4a7051c-d7e9-46cc-bcbc-6389a7a4509b.jpg?im_w=240"
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box p={2}>
                    <h4>Mark</h4>
                    <p>Agu 2021</p>
                  </Box>
                </Grid>
              </Grid>

              <p style={{ marginBottom: "50px" }}>
                I came across the Arctic Hideaway when searching for a unique
                place to stay after a 10 day hiking tour, we were looking for
                something a little “different” and somewhere we could
              </p>

              <Grid container>
                <Grid item xs={1}>
                  <Box p={2}>
                    <Avatar
                      alt="ff"
                      style={{ marginTop: "20px" }}
                      src="https://a0.muscache.com/im/pictures/user/13b6164a-9194-4779-9622-089ad14f5ab1.jpg?im_w=240"
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box p={2}>
                    <h4>Alexa</h4>
                    <p>April 2022</p>
                  </Box>
                </Grid>
              </Grid>
              <p style={{ marginBottom: "50px" }}>
                An EXPERIENCE and reminder of what matters in life. Loved every
                detail of it. Amazed by Hovath hospitality, uniqueness,
                openness, vision and passion! It is about experiencing oneself,
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
            Show all 13 reviews
          </p>
        </Grid>
      </Grid>
    </>
  );
};
export default UnderHome;
