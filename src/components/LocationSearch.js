import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import ButtonGroup from "@mui/material/ButtonGroup";

import Drawer from "@mui/material/Drawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// react icons
import { IoSearchCircleSharp } from "react-icons/io5";
import { pink } from "@mui/material/colors";

// components
import Logo from "./Logo";
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../themes/commonStyles";
import ProfileSettings from "./ProfileSettings";

const choices = [
  { id: 1, text: "Anywhere", altText: "Stays" },
  { id: 2, text: "Any week", altText: "Experiences" },
  { id: 3, text: "Add guest", withIcon: true, altText: "Online Experiences" },
];

const LocationSearch = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
  
      console.log("windowClicked")
      setAnchorEl(null);
      setIsOpen(false);
    
  };
  useEffect(() => {
    
    document.addEventListener("click", handleClose);
  }, []);

  return (
    <>
      <div
        style={{
          height: isOpen ? 75 : 0,
          transition: "0.25s",
          width: "100%",
          // border: "1px solid red",
        }}
      ></div>

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
            return (
              <Button
                key={choice.id}
                style={{ paddingInline: isOpen ? 50 : 0, transition: "0.25s" }}
                onClick={(e) => {
                  e.stopPropagation()
                  setIsDrawerOpen(true);
                  setIsOpen(true);
                }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontWeight: "bold",
                  }}
                >
                  {isOpen ? choice.altText : choice.text}
                </Typography>
                {choice.withIcon && (
                  <Box
                    sx={{
                      ml: 1,
                      mt: 1,
                      mr: 1,
                    }}
                  >
                    <IoSearchCircleSharp color={pink[500]} size={32} />
                  </Box>
                )}
              </Button>
            );
          })}
        </Stack>{" "}
      </Paper>
    </>
  );
};

export default LocationSearch;
