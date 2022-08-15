import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { FaRegHeart } from 'react-icons/fa';
import { useTranslation } from "react-i18next";


//bootstrap
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';
import "../components/cardStyle.css"
export default function MainCard() {
  const { t } = useTranslation();
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const data = useSelector((state)=>state.allRequests.requests)

  return (
    <>
   
      <div className="container d-flex">
        <div className="row ">

{data.map((dat,ky)=><Card className="col-md-3  col-sm-1 border-0 "  key={ky} >
          <IconButton  aria-label="add an alarm" size="large" sx={{width:40, position:'absolute', top:10, left:230,zIndex:5}}>
  <FavoriteBorderIcon  fontSize="inherit" style={{color:'white'}}/>
</IconButton>
            <Carousel
              // activeIndex={index}
              // onSelect={handleSelect}
              // interval={50000}
              // className="w-100"
            >
              
              <Carousel.Item>
                <img  
                  className="d-block rounded wdth" 
                  src={dat.Url}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block  rounded wdth"
                  src={dat.Url2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block rounded wdth"
                  src={dat.Url3}
                  alt="third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block rounded wdth"
                  src={dat.Url4}
                  alt="third slide"
                />
              </Carousel.Item>
            </Carousel>

            <Card.Body className="text-muted">
              <Card.Title className="text-black ">{dat.address}</Card.Title>
              <div >3.200 kilometers away</div>
              <div >Aug 29-sep 3</div>
              <div >${dat.price} night</div>
            </Card.Body>
          </Card>

)}
          
        </div>
      </div>
    </>
  );
}
