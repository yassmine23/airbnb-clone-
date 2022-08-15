import * as React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTranslation } from "react-i18next";

//bootstrap
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';
import "../components/cardStyle.css"

export default function MainCard() {
  const { t } = useTranslation();
 
  const data = useSelector((state)=>state.allRequests.requests)

  return (
    <>
   
      <div className="container d-flex">
        <div className="row ">

{data.map((dat,ky)=><Card className="col-md-3  col-sm-1 border-0 "  key={ky} >
          <IconButton   size="large" sx={{width:40, position:'absolute', top:10, left:230,zIndex:5}}>
  <FavoriteBorderIcon  fontSize="inherit" style={{color:'white'}}/>
</IconButton>
            <Carousel
              interval={50000}

            >
              
              <Carousel.Item>
                <img  
                  className="d-block rounded wdth " 
                  src={dat.Url}
                  alt="First slide"
                  // width={640} 
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block  rounded wdth"
                  src={dat.Url2}
                  alt="Second slide"
                  // width={640} 

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block rounded wdth "
                  src={dat.Url3}
                  alt="third slide"
                  // width={640}  

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block rounded wdth"
                  src={dat.Url4}
                  alt="forth slide"
                  // width={640} 

                />
              </Carousel.Item>
              
            </Carousel>
          
          <Link to={'/details'} style={{textDecoration:'none'}}>
            <Card.Body className="text-muted">
             <div className='d-flex flex-row justify-content-between text-black'>
               <Card.Title >{dat.address}</Card.Title>
               <div> <StarIcon fontSize="inherit"/> 5.0</div>
               </div>
              <div >3.200 kilometers away</div>
              <div >Aug 29-sep 3</div>
              <div >${dat.price} night</div>
            </Card.Body>
            </Link>
          </Card>

)}
          
        </div>
      </div>
    </>
  );
}
