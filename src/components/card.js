import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { FaRegHeart } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function MainCard() {
  const { t } = useTranslation();

  return (
    <>
    
      <Card sx={{ maxWidth: 280, borderRadius:2}}  >
      
  
  <div > <IconButton sx={{ color:'#fff', position:'relative', top:'60px',left:'200px',zIndex:'5' }}>
          <FavoriteBorderIcon /> 
        </IconButton>
            <Carousel infiniteLoop useKeyboardArrows >
              
                <div>
                    <img src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                
                <div>
                    <img src="https://images.unsplash.com/photo-1431631927486-6603c868ce5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" />
                </div>
            </Carousel>
            
        </div>
              
      <Link to={"/details"}  >
        <CardContent>
          
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>  <Typography
            gutterBottom
            variant="h4"
            component="h4"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Nordland, Norway
          </Typography>
          <IconButton sx={{fontSize:'16px', color:'#222222'}}>
          <StarIcon /> 4.17
        </IconButton>
        </Box>
          
          <Typography variant="body2" color="text.secondary">
            Individual Host
          </Typography>
          <Typography variant="body2" color="text.secondary">
            6-11 may
          </Typography>
          <Typography
          
            style={{ color: "black", fontWeight: "bold" }}
          >
            $ 1,350 {t("total")}
          </Typography>

          
        </CardContent>
        </Link>
      </Card>
    </>
  );
}
