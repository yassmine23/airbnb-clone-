import React  from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

//bootstrap
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';

// import React from 'react'
// import { useSelector } from 'react-redux';
import Header from './../Header';
import '../cardStyle.css'
// import { Card } from 'react-bootstrap/Card';
// import { IconButton } from '@mui/material/IconButton';
// import { FavoriteBorderIcon } from '@mui/icons-material/FavoriteBorder';
// import { Carousel } from 'react-bootstrap/Carousel';
// import { StarIcon } from '@mui/icons-material/Star';
// import { Link } from 'react-router-dom';

export default function WishList() {
    const data = useSelector((state)=>state.userData.info)
    const wshList = data.favorit
    // where addWishList fun
    const addWishList =(dat)=>{
   
    }
  return <>
  <Header />
  <div className="container d-flex">
        <div className="row ">
  {(data.favorit)? <>
    
  {wshList.map((dat,ky)=><Card className="col-lg-3 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >
  <IconButton   size="large" onClick={()=>addWishList(dat)}  sx={{width:40, position:'absolute', top:10, left:230,zIndex:5}}>
<FavoriteBorderIcon  className="text-danger" fontSize="inherit" style={{color:'white'}}/>
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
  
  <Link to={`/details/`}  style={{textDecoration:'none'}}>
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

)}</>:<h1>You didn't add anything to wishlist</h1>}
</div>
</div>
</> 
    
  
}