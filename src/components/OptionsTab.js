import React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// react icons
import { FaFilter } from "react-icons/fa";
import { locationsTab } from "../data/mock-data";

//modal
import Backdrop from "@mui/material/Backdrop";
// import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import ChartModal from "./chart";
import Divider from "@mui/material/Divider";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  overflowX: "hidden",
  height: "75vh",
 
};

const data = [
  { year: '2011', maxPrice: 100 },
  { year: '2012', maxPrice: 160 },
  { year: '2016', maxPrice: 100 },
  { year: '2013', maxPrice: 90 },
  { year: '2014', maxPrice: 100 },
  { year: '2015', maxPrice: 130 },
  { year: '2016', maxPrice: 100 },
  { year: '2017', maxPrice: 150 },
  { year: '2018', maxPrice: 190 },
  { year: '2019', maxPrice: 220 },
  { year: '2020', maxPrice: 250 },
  { year: '2021', maxPrice: 320 },
  { year: '2022', maxPrice: 300 },
  
];

const buttonStyle={
  backgroundColor: "white",
                    color: "black",
                    borderRadius: "45%",
                      fontSize: "16px",

                      "&:focus": {
                        backgroundColor: "black",
                        color: "white",

                        },
                        "&:hover": {
                          border:'1px solid black',
                          backgroundColor:'white',
                          color:'black',
  
                          }

}





const OptionsTab = () => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: "none", md: "block" },
            border: "1px solid #ddd",
            minWidth: 90,
            justifyContent: "space-between",
            borderRadius: 2,
            textTransform: "capitalize",
            py: 1,
            color: "theme.palette.text.primary",
          }}
          onClick={handleOpen}
        >
          <FaFilter /> 
          {t("filter")}
        </Button>
          {/* modal **********/}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h2"
                style={{ fontWeight: "bold", fontSize: 24 }}
              >
                Price Range
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                The average nightly price is $337
              </Typography>
              <ChartModal />
              <div className="MuiInput-root row py-3">
                <div className="col-md-6">
                  {" "}
                  <label style={{ fontWeight: "bold", paddingRight: 3 }}>
                    min price
                  </label>
                  <input
                    className="MuiInput-input p-2"
                    placeholder="min price"
                    value={"$ 10"}
                  />
                </div>

                <div className="col-md-6">
                  {" "}
                  <label style={{ fontWeight: "bold", paddingRight: 3 }}>
                    max price
                  </label>
                  <input
                    className="MuiInput-input  p-2"
                    placeholder="max price"
                    value={"$ 5400"}
                  />
                </div>
              </div>

              <Divider sx={{ py: 5 }} />

              <Box>
                <Typography
                  id="transition-modal-title"
                  variant="h3"
                  component="h2"
                  style={{ fontWeight: "bold", fontSize: 24 }}
                >
                  Type of place
                </Typography>

                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div className="col-md-6">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Entire Place"
                    />
                    <span
                      style={{
                        display: "block",
                        marginLeft: 40,
                        color: "gray",
                      }}
                    >
                      A place all to yourself
                    </span>
                  </div>

                  <div className="col-md-6">
                    {" "}
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Private room"
                    />
                    <span
                      style={{
                        display: "block",
                        marginLeft: 40,
                        color: "gray",
                      }}
                    >
                      Your own room in a home or a hotel, plus some shared
                      common spaces
                    </span>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Shared room"
                    />
                    <span
                      style={{
                        display: "block",
                        marginLeft: 40,
                        color: "gray",
                      }}
                    >
                      A sleeping space and common areas that may be shared with
                      others
                    </span>
                  </div>
                </FormGroup>
              </Box>

              <Divider sx={{ py: 5 }} />

              {/* rooms&beds *****/}
              <Box>
                <Typography
                  id="transition-modal-title"
                  variant="h3"
                  component="h2"
                  style={{ fontWeight: "bold", fontSize: 24 }}
                >
                  Rooms and beds
                </Typography>

                <Typography
                  variant="h3"
                  component="h2"
                  style={{ fontSize: 16, paddingTop: "20px" }}
                >
                  Bedrooms{" "}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                    
                  >
                    Any
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                    
                  >
                    1
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    2
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    3
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    4
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    5
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    6
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    7
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    8+
                  </Button>
                </Stack>

                <Typography
                  variant="h3"
                  component="h2"
                  style={{ fontSize: 16, paddingTop: "20px" }}
                >
                  Beds{" "}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    Any
                  </Button>
                  <Button
                    variant="contained"
                    
                    sx={buttonStyle}
                  >
                    1
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    2
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    3
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    4
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    5
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    6
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    7
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    8+
                  </Button>
                </Stack>

                <Typography
                  variant="h3"
                  component="h2"
                  style={{ fontSize: 16, paddingTop: "20px" }}
                >
                  Bathrooms{" "}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    Any
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    1
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    2
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    3
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    4
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    5
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    6
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    7
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                  >
                    8+
                  </Button>
                </Stack>
    </Box>
              
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Container>
  );
};

export default OptionsTab;
