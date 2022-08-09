import React from 'react';
import MainCard from "../components/card";
import Header from "../components/Header";
import OptionsTab from "../components/OptionsTab";
import Footer from "../components/Footer";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { displayOnDesktop } from "../themes/commonStyles";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaSearch, FaRegHeart, FaRegUserCircle } from 'react-icons/fa';

import Fab from '@mui/material/Fab';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { Link } from "react-router-dom";


import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




//footerMenu
const footerMenu = [
  { id: 1, text: 'Explore', icon: <FaSearch size={18} /> },
  { id: 2, text: 'Wishlist', icon: <FaRegHeart size={18} /> },
  { id: 3, text: 'Login', icon: <FaRegUserCircle size={18} /> },
];

//map


export default function MapPage() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Box
          sx={{
            position: "sticky",
            top: "0",
            backgroundColor: "white",
            zIndex: 90,
          }}
        >
          <Header />
          <OptionsTab />
        </Box>
      
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        
        
         
          <Box sx={{display:'flex', justifyContent:'center', width:'100%', zIndex:1}}>
        <MapContainer center={[30.044420, 31.235712]} zoom={7} scrollWheelZoom={false}>
           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
           {/* <Marker position={[51.505, -0.09]}>
               <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
               </Popup>
           </Marker> */}
       </MapContainer>
       </Box>
            <Box  sx={{   m: 1,  }}
            >
          <Link to={"/"}>  <Fab variant="extended" style={{backgroundColor:'#222222', color:'white', zIndex:50, position:'fixed', bottom:'10%', right:'48%',}}>
        <FormatListBulletedOutlinedIcon sx={{ mr: 1  }} />
        show lists
      </Fab> </Link>
              </Box>          
        </Box>
        
    </React.Fragment>
    
  )
}
