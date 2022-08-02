import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// react icons
import { BsGlobe } from "react-icons/bs";
import { IoChevronUpOutline } from "react-icons/io5";

import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from "../themes/commonStyles";

const footerLinks = [
  { id: 1, text: "Privacy", url: "#" },
  { id: 2, text: "Terms", url: "#" },
  { id: 3, text: "Sitemap", url: "#" },
  { id: 4, text: "Destinations", url: "#" },
];

const Footer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        ...fullWidthFlex,
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            width: "100%",
          }}
        >
          <Stack>
            <Paper>
              <Link href="#"> 2022 Airbnb Copyright </Link>
            </Paper>
            {footerLinks.map((link) => {
              return (
                <Paper key={link.id}>
                  <Link href={link.url}> {link.text}</Link>
                </Paper>
              );
            })}
          </Stack>

          <Stack>
            <Paper sx={justifyCenter}>
              <Button>
                <Box sx={{ ...justifyCenter, mr: 1 }}>
                  <BsGlobe size={24} />
                </Box>
                English (US)
              </Button>
              <Button> $USD </Button>
              <Button onClick={() => setIsDrawerOpen(true)}>
                Support & Resources
                <Box sx={{ ...justifyCenter, ml: 1 }}>
                  <IoChevronUpOutline size={24} />
                </Box>
              </Button>
              <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  {" "}
                  <List>
                  <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {" "}
                      Support
                    </Typography>
                    {[
                      "Help Centre",
                      "Air Cover",
                      "Safety Information",
                      "Supporting people with disabilities",
                      "Cancellation options",
                      "Our covid-19 Response",
                      "Report a neighbourhood concern",
                    ].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider orientation="vertical" flexItem />
                  <List>
                  <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {" "}
                      Community
                    </Typography>
                    {[
                      "Airbnb.org: disaster relief housing",
                      "Support Afghan refugees",
                      "Combating discrimination",
                      "Combating discrimination",
                    ].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider orientation="vertical" flexItem />
                  <List>
                  <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {" "}
                      Hosting
                    </Typography>
                    {[
                      "Try hosting",
                      "AirCover for Hosts",
                      "Explore hosting resourses",
                      "Visit our community foroum",
                      "How to host responsibly",
                    ].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider orientation="vertical" flexItem />
                  <List>
                  <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {" "}
                      Airbnb
                    </Typography>
                    {[ 
                      
                      "Newsroom",
                      "Learn about new features",
                      "Letter from our founders",
                      "Careers",
                      "Investors",
                      "Gift cards",
                    ].map((text, index) => (
                      
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Drawer>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
